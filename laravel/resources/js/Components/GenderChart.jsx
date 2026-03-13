import ReactApexChart from "react-apexcharts";

export default function GenderChart({ genderData, totalMembers }) {
    const chartOptions = {
        series: [
            {
                name: "Jumlah",
                data: [genderData.male, genderData.female],
            },
        ],
        chart: {
            type: "bar",
            height: 280,
            toolbar: {
                show: false,
            },
        },
        plotOptions: {
            bar: {
                horizontal: true,
                borderRadius: 8,
                barHeight: "50%",
                distributed: true,
            },
        },
        colors: ["#487FFF", "#FF6B9D"],
        dataLabels: {
            enabled: true,
            style: {
                fontSize: "14px",
                fontWeight: 600,
                colors: ["#fff"],
            },
        },
        xaxis: {
            categories: ["Laki-laki", "Perempuan"],
            labels: {
                style: {
                    fontSize: "12px",
                    colors: "#64748B",
                },
            },
        },
        yaxis: {
            labels: {
                style: {
                    fontSize: "14px",
                    fontWeight: 500,
                    colors: ["#1E293B"],
                },
            },
        },
        grid: {
            borderColor: "#E2E8F0",
            strokeDashArray: 3,
            xaxis: {
                lines: {
                    show: true,
                },
            },
            yaxis: {
                lines: {
                    show: false,
                },
            },
        },
        legend: {
            show: false,
        },
        tooltip: {
            custom: function ({ series, seriesIndex, dataPointIndex, w }) {
                const value = series[seriesIndex][dataPointIndex];
                const category = w.globals.labels[dataPointIndex];
                const percentage = ((value / totalMembers) * 100).toFixed(1);
                const color = dataPointIndex === 0 ? "#487FFF" : "#FF6B9D";

                return `
                    <div style="background: white; padding: 12px 16px; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.15); min-width: 200px;">
                        <div style="font-weight: 600; font-size: 14px; color: #1E293B; margin-bottom: 8px; border-bottom: 2px solid ${color}; padding-bottom: 6px;">
                            ${category}
                        </div>
                        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px;">
                            <span style="color: #64748B; font-size: 13px;">Jumlah:</span>
                            <span style="font-weight: 600; font-size: 15px; color: ${color};">${value} orang</span>
                        </div>
                        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px;">
                            <span style="color: #64748B; font-size: 13px;">Persentase:</span>
                            <span style="font-weight: 600; font-size: 14px; color: ${color};">${percentage}%</span>
                        </div>
                        <div style="margin-top: 8px; padding-top: 8px; border-top: 1px solid #E2E8F0;">
                            <div style="display: flex; justify-content: space-between; align-items: center;">
                                <span style="color: #64748B; font-size: 12px;">Total Jemaat:</span>
                                <span style="font-weight: 600; font-size: 13px; color: #1E293B;">${totalMembers} orang</span>
                            </div>
                        </div>
                    </div>
                `;
            },
        },
    };

    return (
        <div className="card h-100 radius-8 border-0">
            <div className="card-body p-24">
                <h6 className="mb-2 fw-bold text-lg">Perbandingan Jamaah</h6>
                <span className="text-sm fw-medium text-secondary-light mb-20 d-block">
                    Berdasarkan Jenis Kelamin
                </span>

                <div className="mt-24">
                    <ReactApexChart
                        options={chartOptions}
                        series={chartOptions.series}
                        type="bar"
                        height={280}
                    />
                </div>

                <div className="mt-24">
                    <div className="d-flex align-items-center justify-content-between p-12 bg-primary-50 rounded mb-12">
                        <div className="d-flex align-items-center gap-2">
                            <span
                                className="w-12-px h-12-px rounded-circle"
                                style={{ backgroundColor: "#487FFF" }}
                            ></span>
                            <span className="text-sm fw-medium">Laki-laki</span>
                        </div>
                        <div className="text-end">
                            <span className="text-sm fw-bold d-block">
                                {genderData.male}
                            </span>
                            <span className="text-xs text-secondary-light">
                                {(
                                    (genderData.male / totalMembers) *
                                    100
                                ).toFixed(1)}
                                %
                            </span>
                        </div>
                    </div>
                    <div className="d-flex align-items-center justify-content-between p-12 bg-danger-50 rounded">
                        <div className="d-flex align-items-center gap-2">
                            <span
                                className="w-12-px h-12-px rounded-circle"
                                style={{ backgroundColor: "#FF6B9D" }}
                            ></span>
                            <span className="text-sm fw-medium">Perempuan</span>
                        </div>
                        <div className="text-end">
                            <span className="text-sm fw-bold d-block">
                                {genderData.female}
                            </span>
                            <span className="text-xs text-secondary-light">
                                {(
                                    (genderData.female / totalMembers) *
                                    100
                                ).toFixed(1)}
                                %
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
