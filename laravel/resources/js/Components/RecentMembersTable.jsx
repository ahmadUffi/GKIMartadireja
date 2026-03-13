export default function RecentMembersTable({ members }) {
    return (
        <div className="card h-100">
            <div className="card-header">
                <div className="d-flex align-items-center flex-wrap gap-2 justify-content-between">
                    <h6 className="mb-2 fw-bold text-lg mb-0">Users Terbaru</h6>
                    <a
                        href="#"
                        className="text-primary-600 hover-text-primary d-flex align-items-center gap-1"
                    >
                        View All
                        <i className="ri-arrow-right-s-line"></i>
                    </a>
                </div>
            </div>
            <div className="card-body p-24">
                <div className="table-responsive scroll-sm">
                    <table className="table bordered-table mb-0">
                        <thead>
                            <tr>
                                <th scope="col">ID Anggota</th>
                                <th scope="col">Nama</th>
                                <th scope="col">Email</th>
                                <th scope="col">Tanggal Daftar</th>
                                <th scope="col">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {members.map((member, index) => (
                                <tr key={index}>
                                    <td>
                                        <span className="text-sm fw-medium">
                                            {member.id}
                                        </span>
                                    </td>
                                    <td>
                                        <div className="d-flex align-items-center">
                                            <div className="w-40-px h-40-px rounded-circle flex-shrink-0 me-12 overflow-hidden">
                                                <img
                                                    src="/assets/images/user.png"
                                                    alt={member.name}
                                                    className="w-100 h-100 object-fit-cover"
                                                />
                                            </div>
                                            <span className="text-sm fw-medium">
                                                {member.name}
                                            </span>
                                        </div>
                                    </td>
                                    <td>
                                        <span className="text-sm">
                                            {member.email}
                                        </span>
                                    </td>
                                    <td>
                                        <span className="text-sm">
                                            {member.registeredDate}
                                        </span>
                                    </td>
                                    <td>
                                        <span className="badge text-sm fw-semibold text-success-600 bg-success-100 px-20 py-9 radius-4">
                                            {member.status}
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
