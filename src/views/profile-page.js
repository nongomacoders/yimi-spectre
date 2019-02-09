

const profilePage = document.getElementById("profile-page");

export function renderProfilePage() {
  profilePage.innerHTML = `
    <div class="form-group">
        <label class="form-label" for="first-name">first name</label>
        <input class="form-input" type="text" id="first-name" placeholder="e.g ntombifuthi">
        <label class="form-label" for="surname">surname</label>
        <input class="form-input" type="text" id="surname" placeholder="e.g mpanza">
        <label class="form-label" for="nickname">nickname</label>
        <input class="form-input" type="text" id="nickname" placeholder="e.g mafuthi (this name will be shown)">
        <label class="form-label" for="grade">grade</label>
        <select class="form-select" id="grade">
            <option>7</option>
            <option>8</option>
            <option>9</option>
            <option>10</option>
            <option>11</option>
            <option>12</option>
          </select>
        <label class="form-label" for="school">school</label>
        <input class="form-input" type="text" id="school" placeholder="e.g king bhekuzulu highschool">
        <label class="form-label" for="postal-code">postal code of school</label>
        <input class="form-input" type="text" id="postal-code" placeholder="3950">
      </div>`;
  profilePage.style.display = 'block';
}
