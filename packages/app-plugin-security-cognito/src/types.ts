export type PasswordPolicy = {
    minimumLength?: number;
    requireLowercase?: boolean;
    requireNumbers?: boolean;
    requireSymbols?: boolean;
    requireUppercase?: boolean;
};

export type CognitoIdentityProviderOptions = {
    passwordPolicy?: PasswordPolicy;
};
