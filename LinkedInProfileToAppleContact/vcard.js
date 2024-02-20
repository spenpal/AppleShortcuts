function createVCard(data) {
    const vCardFields = {
        BEGIN: "BEGIN:VCARD",
        VERSION: "VERSION:3.0",
        PHOTO: data.PROFILE_PICTURE
            ? `PHOTO;ENCODING=b:${data.PROFILE_PICTURE}`
            : "",
        N: `N:${data.LAST_NAME};${data.FIRST_NAME};${
            data.MIDDLE_NAME ? data.MIDDLE_NAME : ""
        };;`,
        FN: `FN:${data.FIRST_NAME} ${
            data.MIDDLE_NAME ? data.MIDDLE_NAME : ""
        } ${data.LAST_NAME}`,
        ORG: data.LAST_COMPANY_NAME ? `ORG:${data.LAST_COMPANY_NAME}` : "",
        TITLE: data.LAST_COMPANY_POSITION
            ? `TITLE:${data.LAST_COMPANY_POSITION}`
            : "",
        TEL: data.PHONE
            ? `TEL;type=${
                  data.PHONE.TYPE === "MOBILE" ? "CELL" : data.PHONE.TYPE
              };type=VOICE;type=pref:${data.PHONE.NUMBER}`
            : "",
        EMAIL: data.EMAIL ? `EMAIL:${data.EMAIL}` : "",
        URL: data.WEBSITES
            ? data.WEBSITES.map(
                  (website) => `URL;type=${website.LABEL}:${website.URL}`
              ).join("\n")
            : "",
        ADR: data.ADDRESS ? `ADR:;;${data.ADDRESS}` : "",
        BDAY: data.BIRTHDAY ? `BDAY:${data.BIRTHDAY}` : "",
        "X-SOCIALPROFILE-LINKEDIN": `X-SOCIALPROFILE;type=linkedin;x-user=${
            data.LINKEDIN_URL.match("linkedin.com/in/([^/]+)/?")[1]
        }:${data.LINKEDIN_URL}`,
        "X-SOCIALPROFILE-TWITTER": data.TWITTER_URL
            ? `X-SOCIALPROFILE;type=twitter;x-user=${
                  data.TWITTER_URL.match("twitter.com/([^/]+)/?")[1]
              }:${data.TWITTER_URL}`
            : "",
        DATE: data.CONNECTION_DATE
            ? `item1.X-ABDATE:${data.CONNECTION_DATE}\nitem1.X-ABLABEL:LinkedIn`
            : "",
        END: "END:VCARD",
    };

    const vCardText = Object.values(vCardFields)
        .filter((field) => field !== "")
        .join("\n");

    return vCardText;
}

const data = null;
const vCardText = createVCard(data);
document.body.textContent = encodeURIComponent(vCardText);
