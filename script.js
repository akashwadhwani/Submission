function getHTML(listing) {
  return `<div class="city">${listing.Label}</div>
<div class ="Country">Location: ${listing.Country}</div>
<div class ="camera">Number of Cameras:${listing.cctvcamera}</div>
<div class ="people">People ${listing.people}</div>
<div class ="people2">CCTV per person: ${listing.cctvcameraperpeople}</div>` 
}
