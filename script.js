function volume_sphere() {
    // take a input from radius
    let radius = document.getElementById("radius").value;

    // 2. convert to number
    radius = parseFloat(radius);

    // 3. Validation: if radius negative or positive
    if (isNaN(radius) || radius < 0) {
        document.getElementById("volume").value = NaN;
    } else {
        // 4. gettinh volume
        let volume = (4 / 3) * Math.PI * Math.pow(radius, 3);

        // 5. take Result to 4 decimal plac
        document.getElementById("volume").value = volume.toFixed(4);
    }

    // stop to form for default sumbit
    return false;
}

window.onload = function() {
    document.getElementById('MyForm').onsubmit = volume_sphere;
};