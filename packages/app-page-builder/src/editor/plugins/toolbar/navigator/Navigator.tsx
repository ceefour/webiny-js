import React, { useState, useEffect, createContext } from "react";
import { Typography } from "@webiny/ui/Typography";
import { Tooltip } from "@webiny/ui/Tooltip";
import { i18n } from "@webiny/app/i18n";
import { useEventActionHandler } from "~/editor/hooks/useEventActionHandler";
import { NavigatorTitle } from "./StyledComponents";
import { TreeView } from "./TreeView";
import { ReactComponent as UnfoldMoreIcon } from "./assets/unfold_more_24px.svg";
import { ReactComponent as UnfoldLessIcon } from "./assets/unfold_less_24px.svg";

const t = i18n.ns("app-page-builder/editor/plugins/toolbar/navigator");

export const NavigatorContext = createContext({
    refresh: () => null,
    expandAll: false
});

const Navigator = () => {
    const [elementTree, setElementTree] = useState(null);
    const [expandAll, setExpandAll] = useState(false);
    const { getElementTree } = useEventActionHandler();

    const refreshElementTree = async () => {
        try {
            const elementTree = await getElementTree();
            setElementTree(elementTree);
        } catch (e) {
            console.log("Failed!");
        }
    };

    // Get initial element tree.
    useEffect(() => {
        if (elementTree) {
            return;
        }
        // Load element tree.
        refreshElementTree();
    });

    return (
        <NavigatorContext.Provider value={{ refresh: refreshElementTree, expandAll }}>
            <NavigatorTitle>
                <Typography use={"subtitle1"}>Navigator</Typography>
                <button
                    className={"action"}
                    onClick={() => {
                        setExpandAll(!expandAll);
                    }}
                >
                    <Tooltip
                        content={t`{message}`({
                            message: expandAll ? "collapse all" : "expand all"
                        })}
                    >
                        {expandAll ? <UnfoldLessIcon /> : <UnfoldMoreIcon />}
                    </Tooltip>
                </button>
            </NavigatorTitle>
            {elementTree && <TreeView element={elementTree} level={0} />}
        </NavigatorContext.Provider>
    );
};

export default Navigator;