import { Link } from "@inertiajs/react";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useEffect } from "react";

export default function Sidebar({
    sidebarActive,
    mobileMenu,
    onMobileMenuClose,
}) {
    useEffect(() => {
        const handleDropdownClick = (event) => {
            event.preventDefault();
            const clickedLink = event.currentTarget;
            const clickedDropdown = clickedLink.closest(".dropdown");

            if (!clickedDropdown) return;

            const isActive = clickedDropdown.classList.contains("open");

            const allDropdowns = document.querySelectorAll(
                ".sidebar-menu .dropdown",
            );
            allDropdowns.forEach((dropdown) => {
                dropdown.classList.remove("open");
                const submenu = dropdown.querySelector(".sidebar-submenu");
                if (submenu) {
                    submenu.style.maxHeight = "0px";
                }
            });

            if (!isActive) {
                clickedDropdown.classList.add("open");
                const submenu =
                    clickedDropdown.querySelector(".sidebar-submenu");
                if (submenu) {
                    submenu.style.maxHeight = `${submenu.scrollHeight}px`;
                }
            }
        };

        const dropdownTriggers = document.querySelectorAll(
            ".sidebar-menu .dropdown > a, .sidebar-menu .dropdown > Link",
        );

        dropdownTriggers.forEach((trigger) => {
            trigger.addEventListener("click", handleDropdownClick);
        });

        const openActiveDropdown = () => {
            const allDropdowns = document.querySelectorAll(
                ".sidebar-menu .dropdown",
            );
            allDropdowns.forEach((dropdown) => {
                const submenuLinks = dropdown.querySelectorAll(
                    ".sidebar-submenu li a",
                );
                submenuLinks.forEach((link) => {
                    if (
                        link.getAttribute("href") ===
                            window.location.pathname ||
                        link.getAttribute("to") === window.location.pathname
                    ) {
                        dropdown.classList.add("open");
                        const submenu =
                            dropdown.querySelector(".sidebar-submenu");
                        if (submenu) {
                            submenu.style.maxHeight = `${submenu.scrollHeight}px`;
                        }
                    }
                });
            });
        };

        openActiveDropdown();

        return () => {
            dropdownTriggers.forEach((trigger) => {
                trigger.removeEventListener("click", handleDropdownClick);
            });
        };
    }, []);

    return (
        <aside
            className={
                sidebarActive
                    ? "sidebar active"
                    : mobileMenu
                      ? "sidebar sidebar-open"
                      : "sidebar"
            }
        >
            <button
                onClick={onMobileMenuClose}
                type="button"
                className="sidebar-close-btn"
            >
                <Icon icon="radix-icons:cross-2" />
            </button>
            <div>
                <Link href="/" className="sidebar-logo">
                    <img
                        src="/assets/images/logo-new.png"
                        alt="GKI Martadireja"
                        className="light-logo"
                        style={{
                            width: "500px",
                            height: "500px",
                            objectFit: "contain",
                        }}
                    />
                    <img
                        src="/assets/images/logo-new.png"
                        alt="GKI Martadireja"
                        className="dark-logo"
                        style={{
                            width: "500px",
                            height: "500px",
                            objectFit: "contain",
                        }}
                    />
                    <img
                        src="/assets/images/logo-icon.png"
                        alt="GKI Martadireja"
                        className="logo-icon"
                    />
                </Link>
            </div>
            <div className="sidebar-menu-area">
                <ul className="sidebar-menu" id="sidebar-menu">
                    <li>
                        <Link href={route("dashboard")}>
                            <Icon
                                icon="solar:home-smile-angle-outline"
                                className="menu-icon"
                            />
                            <span>Dashboard</span>
                        </Link>
                    </li>

                    <li className="dropdown">
                        <Link href="#">
                            <Icon
                                icon="flowbite:users-group-outline"
                                className="menu-icon"
                            />
                            <span>Management Anggota</span>
                        </Link>
                        <ul className="sidebar-submenu">
                            <li>
                                <Link href={route("members.create")}>
                                    <i className="ri-circle-fill circle-icon text-primary-600 w-auto" />
                                    Buat Anggota
                                </Link>
                            </li>
                            <li>
                                <Link href={route("members.index")}>
                                    <i className="ri-circle-fill circle-icon text-warning-main w-auto" />
                                    List Anggota
                                </Link>
                            </li>
                            <li>
                                <Link href={route("anestesi.index")}>
                                    <i className="ri-circle-fill circle-icon text-info-main w-auto" />
                                    Anestesi
                                </Link>
                            </li>
                        </ul>
                    </li>

                    <li className="dropdown">
                        <Link href="#">
                            <Icon icon="mdi:church" className="menu-icon" />
                            <span>Ibadah</span>
                        </Link>
                        <ul className="sidebar-submenu">
                            <li>
                                <Link href={route("ibadah.index")}>
                                    <i className="ri-circle-fill circle-icon text-primary-600 w-auto" />
                                    Jadwal Ibadah
                                </Link>
                            </li>
                            <li>
                                <Link href={route("warta.index")}>
                                    <i className="ri-circle-fill circle-icon text-warning-main w-auto" />
                                    Warta
                                </Link>
                            </li>
                            <li>
                                <Link href={route("events.index")}>
                                    <i className="ri-circle-fill circle-icon text-info-main w-auto" />
                                    Event
                                </Link>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </aside>
    );
}
