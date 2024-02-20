function get_linkedin_url() {
    let url = decodeURIComponent(window.location.href); // For names with non-English characters
    url = url.match(/https:\/\/www.linkedin.com\/in\/([^/]+)/)[0]; // Remove query parameters
    return url;
}

function get_name() {
    const full_name_element = document.querySelector(".text-heading-xlarge");
    const full_name = full_name_element
        ? full_name_element.textContent.trim().split(" ")
        : [""];
    const first_name = full_name[0];
    const last_name = full_name[full_name.length - 1];
    const middle_name =
        full_name.length > 2 ? full_name.slice(1, -1).join(" ") : null;
    return [first_name, middle_name, last_name];
}

async function get_profile_picture_url() {
    const profile_picture_element = document.querySelector(
        "main > section button > img"
    );

    // Check if the profile picture is the default image
    if (
        profile_picture_element &&
        profile_picture_element
            .getAttribute("src")
            .trim()
            .startsWith("data:image")
    ) {
        return null;
    }

    const profile_picture_button = profile_picture_element.parentElement;
    profile_picture_button.click();
    const bigger_profile_picture_element = await waitForElementToExist(
        "#artdeco-modal-outlet img"
    );

    const profile_picture_url = bigger_profile_picture_element
        ? bigger_profile_picture_element.getAttribute("src").trim()
        : null;

    return profile_picture_url;
}

function get_company() {
    const experience_div_element = document.querySelector(
        "main > section > div#experience"
    );

    if (!experience_div_element) {
        return [null, null];
    }

    const experience_element = experience_div_element.parentElement;

    let latest_company_name = "";
    let latest_company_position = "";

    const latest_company = experience_element.querySelector("li");
    if (latest_company) {
        const latest_company_name_element =
            latest_company.querySelector("div > span > span");
        const latest_company_position_element =
            latest_company.querySelector("div > span");

        latest_company_name = latest_company_name_element
            ? latest_company_name_element.textContent.trim().split(" · ")[0]
            : null;
        latest_company_position = latest_company_position_element
            ? latest_company_position_element.textContent.trim()
            : null;
    }

    return [latest_company_name, latest_company_position];
}

function get_website_urls(element) {
    const websites_list_element = element.querySelector("ul");

    if (websites_list_element) {
        const websites = [];

        const url_elements = websites_list_element.querySelectorAll("a");
        const label_elements = websites_list_element.querySelectorAll("span");

        for (let i = 0; i < url_elements.length; i++) {
            const url_element = url_elements[i];
            const label_element = label_elements[i];

            const website_url = url_element.getAttribute("href").trim();
            const website_label = label_element.textContent
                .replace(/\(([^)]+)\)/, "$1")
                .trim()
                .toLowerCase();

            websites.push({
                URL: website_url,
                LABEL: website_label,
            });
        }

        return websites;
    }

    return null;
}

function get_phone_number(element) {
    const phone_number_element = element.querySelectorAll("ul > li > span");

    if (phone_number_element) {
        const number = phone_number_element
            ? phone_number_element[0].textContent.trim()
            : "";
        const type = phone_number_element
            ? phone_number_element[1].textContent
                  .replace(/\(([^)]+)\)/, "$1")
                  .trim()
                  .toUpperCase()
            : "";
        return { NUMBER: number, TYPE: type };
    }

    return null;
}

function get_address(element) {
    const address_element = element.querySelector("div > a");
    const address = address_element ? address_element.textContent.trim() : null;
    return address;
}

function get_email(element) {
    const email_element = element.querySelector("div > a");
    const email = email_element ? email_element.textContent.trim() : null;
    return email;
}

function get_twitter_url(element) {
    const twitter_element = element.querySelector("ul > li > a");
    const twitter_url = twitter_element
        ? twitter_element.getAttribute("href").trim()
        : null;
    return twitter_url;
}

function get_birthday(element) {
    const birthday_element = element.querySelector("div > span");
    const birthday = birthday_element
        ? birthday_element.textContent.trim()
        : null;
    return birthday;
}

function get_connection_date(element) {
    const connected_date_element = element.querySelector("div > span");
    const connected_date = connected_date_element
        ? connected_date_element.textContent.trim()
        : null;
    return connected_date;
}

function waitForElementToExist(selector) {
    return new Promise((resolve) => {
        if (document.querySelector(selector)) {
            return resolve(document.querySelector(selector));
        }

        const observer = new MutationObserver(() => {
            if (document.querySelector(selector)) {
                resolve(document.querySelector(selector));
                observer.disconnect();
            }
        });

        observer.observe(document.body, {
            subtree: true,
            childList: true,
        });
    });
}

async function main() {
    // JSON Object of LinkedIn Information
    const linkedin_info = {
        PROFILE_PICTURE_URL: null,
        LAST_NAME: null,
        MIDDLE_NAME: null,
        FIRST_NAME: null,
        LAST_COMPANY_NAME: null,
        LAST_COMPANY_POSITION: null,
        PHONE: null,
        EMAIL: null,
        WEBSITES: null,
        ADDRESS: null,
        BIRTHDAY: null,
        LINKEDIN_URL: null,
        TWITTER_URL: null,
        CONNECTION_DATE: null,
    };

    linkedin_info.LINKEDIN_URL = get_linkedin_url();

    [
        linkedin_info.FIRST_NAME,
        linkedin_info.MIDDLE_NAME,
        linkedin_info.LAST_NAME,
    ] = get_name();

    linkedin_info.PROFILE_PICTURE_URL = await get_profile_picture_url();

    [linkedin_info.LAST_COMPANY_NAME, linkedin_info.LAST_COMPANY_POSITION] =
        get_company();

    // Click on the contact info button
    document.getElementById("top-card-text-details-contact-info").click();

    const contact_info_element = await waitForElementToExist(
        "#artdeco-modal-outlet section > div"
    );

    // Loop through contact info
    Array.from(contact_info_element.children).forEach((element) => {
        const contact_icon_element = element.querySelector("svg");
        const contact_icon_name = contact_icon_element
            ? contact_icon_element.getAttribute("data-test-icon").trim()
            : "";

        switch (contact_icon_name) {
            case "link-medium":
                linkedin_info.WEBSITES = get_website_urls(element);
                break;
            case "phone-handset-medium":
                linkedin_info.PHONE = get_phone_number(element);
                break;
            case "location-marker-medium":
                linkedin_info.ADDRESS = get_address(element);
                break;
            case "envelope-medium":
                linkedin_info.EMAIL = get_email(element);
                break;
            case "twitter-solid":
                linkedin_info.TWITTER_URL = get_twitter_url(element);
                break;
            case "calendar-medium":
                linkedin_info.BIRTHDAY = get_birthday(element);
                break;
            case "people-medium":
                linkedin_info.CONNECTION_DATE = get_connection_date(element);
                break;
        }
    });

    return linkedin_info;
}

main().then((LINKEDIN_INFO) => {
    // Close contact window
    document.querySelector("[data-test-modal-close-btn]").click();
    console.log(LINKEDIN_INFO);
    // completion(LINKEDIN_INFO);
});
