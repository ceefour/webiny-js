import { runContentEntryLifecycleHooks } from "./runContentEntryLifecycleHooks";
import { CmsContentEntryAfterDeleteHookArgs } from "../../../../types";

export const afterDeleteHook = async (args: CmsContentEntryAfterDeleteHookArgs): Promise<void> => {
    // if (args.storageOperations.afterDelete) {
    //     await args.storageOperations.afterDelete(args.model, args);
    // }
    await runContentEntryLifecycleHooks("afterDelete", args);
};
