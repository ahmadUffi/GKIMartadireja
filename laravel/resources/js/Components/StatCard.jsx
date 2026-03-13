export default function StatCard({
    icon,
    title,
    value,
    description,
    badge,
    bgClass,
}) {
    return (
        <div
            className={`card px-24 py-16 shadow-none radius-8 border h-100 ${bgClass}`}
        >
            <div className="card-body p-0">
                <div className="d-flex flex-wrap align-items-center justify-content-between gap-1 mb-8">
                    <div className="d-flex align-items-center gap-2">
                        <span
                            className={`mb-0 w-48-px h-48-px ${icon.bgColor} flex-shrink-0 text-white d-flex justify-content-center align-items-center rounded-circle h6 mb-0`}
                        >
                            <i className={icon.className}></i>
                        </span>
                        <span className="mb-0 fw-medium text-secondary-light text-md">
                            {title}
                        </span>
                    </div>
                </div>
                <h6 className="fw-semibold mb-1">{value}</h6>
                <p className="text-sm mb-0">{description}</p>
                {badge && (
                    <span className={`text-sm fw-medium ${badge.className}`}>
                        <i className={badge.icon}></i> {badge.text}
                    </span>
                )}
            </div>
        </div>
    );
}
