function getCleanserRecommendation() {
  const skinType = document.getElementById("skinType").value;
  const skinGoal = document.getElementById("skinGoal").value;
  const fragrancePref = document.getElementById("fragrance").value;

  const matches = products.filter(product => {
    const matchesSkin = product.skinTypes.includes(skinType);
    const matchesGoal = product.skinGoals?.includes(skinGoal);
    const matchesFragrance =
      fragrancePref === "any" || product.fragranceType.includes(fragrancePref);
    return matchesSkin && matchesGoal && matchesFragrance;
  });

  const resultsDiv = document.getElementById("cleanser-results");
  resultsDiv.innerHTML = "";

  if (matches.length === 0) {
    resultsDiv.innerHTML = "<p>No cleansers found 😥</p>";
  } else {
    matches.slice(0, 3).forEach(product => {
      const card = `
        <div style="border:1px solid #ccc; padding:10px; margin:10px; border-radius:10px">
          <h3>${product.name}</h3>
          <img src="${product.image}" alt="${product.name}" width="120">
          <p>${product.description}</p>
          <a href="${product.link}" target="_blank">View Product</a>
        </div>
      `;
      resultsDiv.innerHTML += card;
    });
  }
}
