window.onload = function () {
  const ctx = document.getElementById("myChart");

  new Chart(ctx, {
    type: "line",
    data: {
      labels: ["Jan", "Feb", "Mar", "Apr", "May"],
      datasets: [{
        label: "Users Growth",
        data: [200, 400, 600, 800, 1200],
        borderColor: "#00FF9C",
        backgroundColor: "rgba(0,255,156,0.2)",
        tension: 0.4
      }]
    },
    options: {
      responsive: true
    }
  });
};
