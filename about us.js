// Add filtering and search functionality
const teamMembers = document.querySelectorAll(".team-member");
const searchInput = document.getElementById("search-input");
const departmentSelect = document.getElementById("department-select");

searchInput.addEventListener("input", () => {
  const searchValue = searchInput.value.toLowerCase();
  teamMembers.forEach((teamMember) => {
    const teamMemberName = teamMember
      .querySelector("h2")
      .textContent.toLowerCase();
    if (teamMemberName.includes(searchValue)) {
      teamMember.style.display = "block";
    } else {
      teamMember.style.display = "none";
    }
  });
});

departmentSelect.addEventListener("change", () => {
  const selectedDepartment = departmentSelect.value;
  teamMembers.forEach((teamMember) => {
    const teamMemberDepartment = teamMember.querySelector("p").textContent;
    if (teamMemberDepartment.includes(selectedDepartment)) {
      teamMember.style.display = "block";
    } else {
      teamMember.style.display = "none";
    }
  });
});
