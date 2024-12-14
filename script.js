function toggleSection(selectedOption) {
    // Hide all customization sections
    const sections = document.querySelectorAll(".customization");
    sections.forEach((section) => {
      section.style.display = "none";
    });
  
    // Show the selected customization section
    const selectedSection = document.getElementById(`customization-${selectedOption}`);
    if (selectedSection) {
      selectedSection.style.display = "block";
    }
  }