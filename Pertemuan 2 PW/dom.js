const nameInput = document.getElementById('name');
const nimInput = document.getElementById('nim');
const kelasInput = document.getElementById('kelas');
const alamatInput = document.getElementById('alamat');
const submitBtn = document.getElementById('submit-btn');

const previewName = document.getElementById('preview-name');
const previewKelas = document.getElementById('preview-kelas');
const previewNim = document.getElementById('preview-nim');
const previewAlamat = document.getElementById('preview-alamat');
nameInput.addEventListener('input', function() {
    previewName.textContent = nameInput.value;
});

nimInput.addEventListener('input', function() {
    previewNim.textContent = nimInput.value;
});

kelasInput.addEventListener('input', function() {
    previewKelas.textContent = kelasInput.value;
});
alamatInput.addEventListener('input', function() {
    previewAlamat.textContent = alamatInput.value;
});
submitBtn.addEventListener('click', function(e) {
    e.preventDefault();
    alert('Data telah dikirim!');
});
nameInput.addEventListener('focus', function() {
    nameInput.style.backgroundColor = '#e6f7ff';
});

nameInput.addEventListener('blur', function() {
    nameInput.style.backgroundColor = '';
});

submitBtn.addEventListener('mouseover', function() {
    submitBtn.style.backgroundColor = '#0056b3';
});

submitBtn.addEventListener('mouseout', function() {
    submitBtn.style.backgroundColor = '#007bff';
});
