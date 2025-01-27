import {
    SecurityAuthorizationPlugin,
    SecurityContext,
    SecurityIdentity,
    SecurityPermission
} from "@webiny/api-security/types";

type APIKeyAuthorization = {
    identityType?: string;
};

const createCacheKey = ({ identity }: { identity: SecurityIdentity }): string => {
    return `I#${identity.id}`;
};

export default (config: APIKeyAuthorization = {}): SecurityAuthorizationPlugin => {
    const permissionCache = new Map<string, SecurityPermission[] | null>();
    return {
        type: "security-authorization",
        name: "security-authorization-api-key",
        async getPermissions({ security }: SecurityContext) {
            const identityType = config.identityType || "api-key";

            const identity = security.getIdentity();

            if (!identity || identity.type !== identityType) {
                return;
            }
            const cacheKey = createCacheKey({
                identity
            });
            if (permissionCache.has(cacheKey)) {
                return permissionCache.get(cacheKey);
            }
            // We can expect `permissions` to exist on the identity, because api-key authentication
            // plugin sets them on the identity instance to avoid loading them from DB here.
            const permissions = Array.isArray(identity.permissions) ? identity.permissions : [];

            permissionCache.set(cacheKey, permissions);

            return permissions;
        }
    };
};
