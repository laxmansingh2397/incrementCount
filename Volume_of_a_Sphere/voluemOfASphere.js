function volumn_sphere() {
    const radiusInput = document.getElementById("radius").value;
    const volumneOutput = document.getElementById("volumne");

        let radius = parseFloat(radiusInput);

        if (isNaN(radius) || radius < 0) {
            volumneOutput.value("NaN");
            return false;
        }

        const volume = (4 / 3) * Math.PI * Math.pow(radius,3);
        volumneOutput.value = volume.toFixed(4);
        return false;

}   

window.onload = document.getElementById('myForm').onsubmit = volumn_sphere;
