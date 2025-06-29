function getCleanserRecommendation() {
  const skinType = document.getElementById("skinType").value;
  const eczemaRosacea = document.getElementById("eczemaRosacea").value;
  const fragranceFree = document.getElementById("fragranceFree").value;

  let matches = products.filter(product =>
    product.skinTypes.includes(skinType) &&
    (eczemaRosacea === "no" || !product.whenToNotUse.some(reason => reason.toLowerCase().includes("eczema") || reason.toLowerCase().includes("rosacea"))) &&
    (fragranceFree === "no" || product.fragranceType.includes("fragrancefree"))
  );

  const resultDiv = document.getElementById("result");
  if (matches.length > 0) {
    resultDiv.innerHTML = matches.map(product => `
      <h3>${product.name}</h3>
      <p>${product.description}</p>
      <a href="${product.link}" target="_blank">View Product</a>
      <hr>
    `).join("");
  } else {
    resultDiv.innerHTML = "<p>No matching cleansers found. Try different answers!</p>";
  }
}
