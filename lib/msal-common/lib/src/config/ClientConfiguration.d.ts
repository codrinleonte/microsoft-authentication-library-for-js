import { INetworkModule } from "../network/INetworkModule";
import { ICrypto } from "../crypto/ICrypto";
import { ILoggerCallback, LogLevel } from "../logger/Logger";
import { Authority } from "../authority/Authority";
import { CacheManager } from "../cache/CacheManager";
/**
 * Use the configuration object to configure MSAL Modules and initialize the base interfaces for MSAL.
 *
 * This object allows you to configure important elements of MSAL functionality:
 * - authOptions                - Authentication for application
 * - cryptoInterface            - Implementation of crypto functions
 * - libraryInfo                - Library-specific options
 * - loggerOptions              - Logging for application
 * - networkInterface           - Network implementation
 * - storageInterface           - Storage implementation
 * - systemOptions              - Storage options
 */
export declare type ClientConfiguration = {
    authOptions: AuthOptions;
    systemOptions?: SystemOptions;
    loggerOptions?: LoggerOptions;
    storageInterface?: CacheManager;
    networkInterface?: INetworkModule;
    cryptoInterface?: ICrypto;
    libraryInfo?: LibraryInfo;
};
/**
 * Use this to configure the auth options in the Configuration object
 *
 * - clientId                    - Client ID of your app registered with our Application registration portal : https://portal.azure.com/#blade/Microsoft_AAD_IAM/ActiveDirectoryMenuBlade/RegisteredAppsPreview in Microsoft Identity Platform
 * - authority                   - You can configure a specific authority, defaults to " " or "https://login.microsoftonline.com/common"
 */
export declare type AuthOptions = {
    clientId: string;
    authority?: Authority;
    knownAuthorities?: Array<string>;
    cloudDiscoveryMetadata?: string;
};
/**
 * Use this to configure the telemetry options in the Configuration object
 *
 * - applicationName              - Name of the consuming apps application
 * - applicationVersion           - Version of the consuming application
 * - telemetryEmitter             - Function where telemetry events are flushed to
 */
export declare type TelemetryOptions = {
    applicationName: string;
    applicationVersion: string;
};
/**
 * Use this to configure token renewal and telemetry info in the Configuration object
 *
 * - tokenRenewalOffsetSeconds    - Sets the window of offset needed to renew the token before expiry
 * - telemetry                    - Telemetry options for library network requests
 */
export declare type SystemOptions = {
    tokenRenewalOffsetSeconds?: number;
    telemetry?: TelemetryOptions;
};
/**
 *  Use this to configure the logging that MSAL does, by configuring logger options in the Configuration object
 *
 * - loggerCallback                - Callback for logger
 * - piiLoggingEnabled             - Sets whether pii logging is enabled
 * - logLevel                      - Sets the level at which logging happens
 */
export declare type LoggerOptions = {
    loggerCallback?: ILoggerCallback;
    piiLoggingEnabled?: boolean;
    logLevel?: LogLevel;
};
/**
 * Use this to configure the library-specific options
 */
export declare type LibraryInfo = {
    sku: string;
    version: string;
    cpu: string;
    os: string;
};
export declare const DEFAULT_SYSTEM_OPTIONS: SystemOptions;
/**
 * Function that sets the default options when not explicitly configured from app developer
 *
 * @param Configuration
 *
 * @returns Configuration
 */
export declare function buildClientConfiguration({ authOptions: userAuthOptions, systemOptions: userSystemOptions, loggerOptions: userLoggerOption, storageInterface: storageImplementation, networkInterface: networkImplementation, cryptoInterface: cryptoImplementation, libraryInfo: libraryInfo }: ClientConfiguration): ClientConfiguration;