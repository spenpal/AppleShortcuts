function getLinkedinUrl() {
    let url = decodeURIComponent(window.location.href); // For names with non-English characters
    url = url.match(/https:\/\/www.linkedin.com\/in\/([^/]+)/)[0]; // Remove query parameters
    return url;
}

function getName() {
    const nameHeading = document.querySelector("h1");
    if (!nameHeading) return ["", null, ""];

    const nameParts = nameHeading.textContent.trim().split(" ");
    const firstName = nameParts[0];
    const lastName = nameParts[nameParts.length - 1];
    const middleName =
        nameParts.length > 2 ? nameParts.slice(1, -1).join(" ") : null;
    return [firstName, middleName, lastName];
}

async function getProfilePictureUrl() {
    // TODO: change this query selector
    const imgElement = document.querySelector("main > section button > img");

    // Check if the profile picture is the default image
    if (
        imgElement &&
        imgElement.getAttribute("src").trim().startsWith("data:image")
    ) {
        return null;
    }

    const imgButton = imgElement.parentElement;
    imgButton.click();
    const modalImg = await waitForElementToExist("#artdeco-modal-outlet img");

    const pictureUrl = modalImg ? modalImg.getAttribute("src").trim() : null;

    document.querySelector("[data-test-modal-close-btn]").click();

    return pictureUrl;
}

function getCompany() {
    const experienceSection = document.querySelector("#experience");
    if (!experienceSection) return [null, null];

    let companyName = null;
    let position = null;

    const companyItem = experienceSection.parentElement.querySelector("li");
    if (
        companyItem.querySelector("[data-field='experience_company_logo'] span")
    ) {
        // Latest company, multiple positions
        const nameSpan = companyItem.querySelector("div > span");
        const positionSpan = companyItem
            .querySelector("li")
            .querySelector("div > span");

        companyName = nameSpan ? nameSpan.textContent.trim() : null;
        position = positionSpan ? positionSpan.textContent.trim() : null;
    } else {
        // Latest company, latest position
        const nameSpan = companyItem.querySelector("div > span > span");
        const positionSpan = companyItem.querySelector("div > span");

        companyName = nameSpan
            ? nameSpan.textContent.trim().split(" · ")[0]
            : null;
        position = positionSpan ? positionSpan.textContent.trim() : null;
    }

    return [companyName, position];
}

function getWebsiteUrls(element) {
    const listElement = element.querySelector("ul");

    if (listElement) {
        const websites = [];

        const links = listElement.querySelectorAll("a");
        const labels = listElement.querySelectorAll("span");

        for (let i = 0; i < links.length; i++) {
            const link = links[i];
            const label = labels[i];

            const url = link.getAttribute("href").trim();
            const labelText = label.textContent
                .replace(/\(([^)]+)\)/, "$1")
                .trim()
                .toLowerCase();

            websites.push({
                URL: url,
                LABEL: labelText,
            });
        }

        return websites;
    }

    return null;
}

function getPhoneNumber(element) {
    const phoneNumberElement = element.querySelectorAll("ul > li > span");

    if (phoneNumberElement) {
        const number = phoneNumberElement
            ? phoneNumberElement[0].textContent.trim()
            : "";
        const type = phoneNumberElement
            ? phoneNumberElement[1].textContent
                  .replace(/\(([^)]+)\)/, "$1")
                  .trim()
                  .toUpperCase()
            : "";
        return { NUMBER: number, TYPE: type };
    }

    return null;
}

function getAddress(element) {
    const addressElement = element.querySelector("div > a");
    const address = addressElement ? addressElement.textContent.trim() : null;
    return address;
}

function getEmail(element) {
    const emailElement = element.querySelector("div > a");
    const email = emailElement ? emailElement.textContent.trim() : null;
    return email;
}

function getTwitterUrl(element) {
    const twitterElement = element.querySelector("ul > li > a");
    const twitterUrl = twitterElement
        ? twitterElement.getAttribute("href").trim()
        : null;
    return twitterUrl;
}

function getBirthday(element) {
    const birthdayElement = element.querySelector("div > span");
    const birthday = birthdayElement
        ? birthdayElement.textContent.trim()
        : null;
    return birthday;
}

function getConnectionDate(element) {
    const connectedDateElement = element.querySelector("div > span");
    const connectedDate = connectedDateElement
        ? connectedDateElement.textContent.trim()
        : null;
    return connectedDate;
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

function sleep(delay) {
    return new Promise((resolve) => setTimeout(resolve, delay));
}

async function main() {
    // JSON Object of LinkedIn Information
    const profile = {
        PROFILE_PICTURE_URL: null,
        LAST_NAME: null,
        MIDDLE_NAME: null,
        FIRST_NAME: null,
        COMPANY_NAME: null,
        COMPANY_POSITION: null,
        PHONE: null,
        EMAIL: null,
        WEBSITES: null,
        ADDRESS: null,
        BIRTHDAY: null,
        LINKEDIN_URL: getLinkedinUrl(),
        TWITTER_URL: null,
        CONNECTION_DATE: null,
    };

    [profile.FIRST_NAME, profile.MIDDLE_NAME, profile.LAST_NAME] = getName();

    profile.PROFILE_PICTURE_URL = await getProfilePictureUrl();

    [profile.COMPANY_NAME, profile.COMPANY_POSITION] = getCompany();

    // Sleep for a bit to allow the contact info to load
    await sleep(1000);

    // Click on the contact info button
    document.getElementById("top-card-text-details-contact-info").click();
    const contactInfo = await waitForElementToExist(
        "#artdeco-modal-outlet section > div"
    );

    // Loop through contact info
    Array.from(contactInfo.children).forEach((element) => {
        const iconElement = element.querySelector("svg");
        const iconName = iconElement
            ? iconElement.getAttribute("data-test-icon").trim()
            : "";

        switch (iconName) {
            case "link-medium":
                profile.WEBSITES = getWebsiteUrls(element);
                break;
            case "phone-handset-medium":
                profile.PHONE = getPhoneNumber(element);
                break;
            case "location-marker-medium":
                profile.ADDRESS = getAddress(element);
                break;
            case "envelope-medium":
                profile.EMAIL = getEmail(element);
                break;
            case "twitter-solid":
                profile.TWITTER_URL = getTwitterUrl(element);
                break;
            case "calendar-medium":
                profile.BIRTHDAY = getBirthday(element);
                break;
            case "people-medium":
                profile.CONNECTION_DATE = getConnectionDate(element);
                break;
        }
    });

    return profile;
}

main().then((profile) => {
    // Close contact window
    document.querySelector("[data-test-modal-close-btn]").click();
    console.log(profile);
    // completion(profile);
});
