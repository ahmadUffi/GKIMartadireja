import { Icon } from "@iconify/react/dist/iconify.js";
import ThemeToggleButton from "@/Helper/ThemeToggleButton";

export default function Navbar({
    sidebarActive,
    onSidebarToggle,
    onMobileMenuToggle,
}) {
    return (
        <div className="navbar-header">
            <div className="row align-items-center justify-content-between">
                <div className="col-auto">
                    <div className="d-flex flex-wrap align-items-center gap-4">
                        <button
                            type="button"
                            className="sidebar-toggle"
                            onClick={onSidebarToggle}
                        >
                            {sidebarActive ? (
                                <Icon
                                    icon="iconoir:arrow-right"
                                    className="icon text-2xl non-active"
                                />
                            ) : (
                                <Icon
                                    icon="heroicons:bars-3-solid"
                                    className="icon text-2xl non-active"
                                />
                            )}
                        </button>
                        <button
                            onClick={onMobileMenuToggle}
                            type="button"
                            className="sidebar-mobile-toggle"
                        >
                            <Icon
                                icon="heroicons:bars-3-solid"
                                className="icon"
                            />
                        </button>
                        <form className="navbar-search">
                            <input
                                type="text"
                                name="search"
                                placeholder="Search"
                            />
                            <Icon icon="ion:search-outline" className="icon" />
                        </form>
                    </div>
                </div>
                <div className="col-auto">
                    <div className="d-flex flex-wrap align-items-center gap-3">
                        <ThemeToggleButton />

                        <div className="dropdown">
                            <button
                                className="has-indicator w-40-px h-40-px bg-neutral-200 rounded-circle d-flex justify-content-center align-items-center"
                                type="button"
                                data-bs-toggle="dropdown"
                            >
                                <Icon
                                    icon="iconoir:bell"
                                    className="text-primary-light text-xl"
                                />
                            </button>
                            <div className="dropdown-menu to-top dropdown-menu-lg p-0">
                                <div className="m-16 py-12 px-16 radius-8 bg-primary-50 mb-16 d-flex align-items-center justify-content-between gap-2">
                                    <div>
                                        <h6 className="text-lg text-primary-light fw-semibold mb-0">
                                            Notifications
                                        </h6>
                                    </div>
                                    <span className="text-primary-600 fw-semibold text-lg w-40-px h-40-px rounded-circle bg-base d-flex justify-content-center align-items-center">
                                        0
                                    </span>
                                </div>
                                <div className="max-h-400-px overflow-y-auto scroll-sm pe-8">
                                    <div className="text-center py-24">
                                        <p className="text-secondary-light">
                                            No notifications
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="dropdown">
                            <button
                                className="d-flex justify-content-center align-items-center rounded-circle"
                                type="button"
                                data-bs-toggle="dropdown"
                            >
                                <img
                                    src="/assets/images/user.png"
                                    alt="User"
                                    className="w-40-px h-40-px object-fit-cover rounded-circle"
                                />
                            </button>
                            <div className="dropdown-menu to-top dropdown-menu-sm">
                                <div className="py-12 px-16 radius-8 bg-primary-50 mb-16 d-flex align-items-center justify-content-between gap-2">
                                    <div>
                                        <h6 className="text-lg text-primary-light fw-semibold mb-2">
                                            Admin User
                                        </h6>
                                        <span className="text-secondary-light fw-medium text-sm">
                                            Administrator
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
