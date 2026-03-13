import { useState } from "react";
import Sidebar from "@/Components/Sidebar";
import Navbar from "@/Components/NavbarLanding";

const AdminLayout = ({ children }) => {
    const [sidebarActive, setSidebarActive] = useState(false);
    const [mobileMenu, setMobileMenu] = useState(false);

    const sidebarControl = () => {
        setSidebarActive(!sidebarActive);
    };

    const mobileMenuControl = () => {
        setMobileMenu(!mobileMenu);
    };

    return (
        <section className={mobileMenu ? "overlay active" : "overlay"}>
            <Sidebar
                sidebarActive={sidebarActive}
                mobileMenu={mobileMenu}
                onMobileMenuClose={mobileMenuControl}
            />

            <main
                className={
                    sidebarActive ? "dashboard-main active" : "dashboard-main"
                }
            >
                <Navbar
                    sidebarActive={sidebarActive}
                    onSidebarToggle={sidebarControl}
                    onMobileMenuToggle={mobileMenuControl}
                />

                <div className="dashboard-main-body">{children}</div>

                <footer className="d-footer">
                    <div className="row align-items-center justify-content-between">
                        <div className="col-auto">
                            <p className="mb-0">
                                © {new Date().getFullYear()} GKI Martadireja.
                                Hak Cipta Dilindungi oleh Telkom University
                                Purwokerto.
                            </p>
                        </div>
                        <div className="col-auto">
                            <p className="mb-0">
                                Made by Telkom University Purwokerto X GKI
                                Martadireja Purwokerto
                            </p>
                        </div>
                    </div>
                </footer>
            </main>
        </section>
    );
};

export default AdminLayout;
