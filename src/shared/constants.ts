import {LogLevel} from "electron-log";

import {AccountType} from "src/shared/model/account";
import {EntryUrlItem} from "./types";

// tslint:disable-next-line:no-var-requires no-import-zones
const {name: APP_NAME, version: APP_VERSION} = require("package.json");

export {
    APP_NAME,
    APP_VERSION,
};

// user data dir, defaults to app.getPath("userData")
export const RUNTIME_ENV_USER_DATA_DIR = `EMAIL_SECURELY_APP_USER_DATA_DIR`;

// boolean
export const RUNTIME_ENV_E2E = `EMAIL_SECURELY_APP_E2E`;

export const ONE_SECOND_MS = 1000;

export const DEFAULT_API_CALL_TIMEOUT = ONE_SECOND_MS * 25;

export const DEFAULT_UNREAD_BADGE_BG_COLOR = "#DE4251";

export const PROVIDER_REPO: Record<AccountType, { repo: string, version: string; commit: string; }> = {
    protonmail: {
        repo: "https://github.com/ProtonMail/WebClient.git",
        commit: "b606422bba683c8bb3dfd4fa898fbf5cff0fdd46",
        version: "3.15.14",
    },
    tutanota: {
        repo: "https://github.com/tutao/tutanota.git",
        commit: "8e545d1da50ea3acbd558639e897873086a03496",
        version: "3.45.2",
    },
};

export const LOCAL_WEBCLIENT_PROTOCOL_PREFIX = "webclient";
export const LOCAL_WEBCLIENT_PROTOCOL_RE_PATTERN = `${LOCAL_WEBCLIENT_PROTOCOL_PREFIX}[\\d]+`;

export const ACCOUNTS_CONFIG_ENTRY_URL_LOCAL_PREFIX = "local:::";
export const ACCOUNTS_CONFIG: Record<AccountType, Record<"entryUrl", EntryUrlItem[]>> = {
    protonmail: {
        entryUrl: [
            {
                value: `${ACCOUNTS_CONFIG_ENTRY_URL_LOCAL_PREFIX}https://mail.protonmail.com`,
                title: `https://mail.protonmail.com (${getBuiltInWebClientTitle("protonmail")})`,
            },
            {
                value: `${ACCOUNTS_CONFIG_ENTRY_URL_LOCAL_PREFIX}https://app.protonmail.ch`,
                title: `https://app.protonmail.ch (${getBuiltInWebClientTitle("protonmail")})`,
            },
            {
                value: `${ACCOUNTS_CONFIG_ENTRY_URL_LOCAL_PREFIX}https://protonirockerxow.onion`,
                title: `https://protonirockerxow.onion (${getBuiltInWebClientTitle("protonmail")})`,
            },
            {
                value: "https://beta.protonmail.com",
                title: "https://beta.protonmail.com (deprecated)",
            },
        ],
    },
    tutanota: {
        entryUrl: [
            {
                value: `${ACCOUNTS_CONFIG_ENTRY_URL_LOCAL_PREFIX}https://mail.tutanota.com`,
                title: `https://mail.tutanota.com (${getBuiltInWebClientTitle("tutanota")})`,
            },
        ],
    },
};

function getBuiltInWebClientTitle(accountType: AccountType): string {
    return `v${PROVIDER_REPO[accountType].version}-${PROVIDER_REPO[accountType].commit.substr(0, 7)}`;
}

export const LOG_LEVELS: LogLevel[] = Object.keys(((stub: Record<LogLevel, null>) => stub)({
    error: null,
    warn: null,
    info: null,
    verbose: null,
    debug: null,
    silly: null,
})) as LogLevel[];
