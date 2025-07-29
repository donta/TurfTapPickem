import type { NavItemDataProps } from "@/components/nav/types";
import { GLOBAL_CONFIG } from "@/global-config";
import { useUserPermissions } from "@/store/userStore";
import { checkAny } from "@/utils";
import { useMemo } from "react";
import { backendNavData } from "./nav-data-backend";
import { frontendNavData } from "./nav-data-frontend";

const navData = GLOBAL_CONFIG.routerMode === "backend" ? backendNavData : frontendNavData;

/**
 * Recursively process navigation data, filtering out items without permissions
 * @param items Navigation items array
 * @param permissions Permissions list
 * @returns Filtered navigation items array
 */
const filterItems = (items: NavItemDataProps[], permissions: string[]) => {
	return items.filter((item) => {
		// Check if current item has permission
		const hasPermission = item.auth ? checkAny(item.auth, permissions) : true;

		// If there are child items, process recursively
		if (item.children?.length) {
			const filteredChildren = filterItems(item.children, permissions);
			// If all child items are filtered out, filter out current item
			if (filteredChildren.length === 0) {
				return false;
			}
			// Update child items
			item.children = filteredChildren;
		}

		return hasPermission;
	});
};

/**
 *
 * Filter navigation data based on permissions
 * @param permissions Permissions list
 * @returns Filtered navigation data
 */
const filterNavData = (permissions: string[]) => {
	return navData
		.map((group) => {
			// Filter items within the group
			const filteredItems = filterItems(group.items, permissions);

			// If there are no items in the group, return null
			if (filteredItems.length === 0) {
				return null;
			}

			// Return filtered group
			return {
				...group,
				items: filteredItems,
			};
		})
		.filter((group): group is NonNullable<typeof group> => group !== null); // Filter out empty groups
};

/**
 * Hook to get filtered navigation data based on user permissions
 * @returns Filtered navigation data
 */
export const useFilteredNavData = () => {
	const permissions = useUserPermissions();
	const permissionCodes = useMemo(() => permissions.map((p) => p.code), [permissions]);
	const filteredNavData = useMemo(() => filterNavData(permissionCodes), [permissionCodes]);
	return filteredNavData;
};
