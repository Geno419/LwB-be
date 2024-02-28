let form = document.getElementById("lobby__form");

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

let displayName =
  urlParams.get("displayName") || sessionStorage.getItem("display_name");
if (displayName) {
  form.name.value = displayName;
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  sessionStorage.setItem("display_name", e.target.name.value);

  let teacher = e.target.teacher.value;
  if (!teacher) {
    alert("Please generate a RoomId or Give your RoomId");
  } else {
    window.location = `studentRoom.html?roomId=${teacher}`;
    localStorage.setItem("roomId", teacher);
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const teacherSelect = document.getElementById("teacherSelect");

  axios
    .get("https://lwb.onrender.com/teachers")
    .then(function (response) {
      const teachers = response.data;
      teachers.forEach(function (teacher) {
        const option = document.createElement("option");
        option.value = teacher.userName;
        option.textContent = teacher.userName;
        teacherSelect.appendChild(option);
      });
    })
    .catch(function (error) {
      console.error("Error fetching teachers:", error);
    });
});
