const text = "matheus reguta kulik";
        const speed = 50;
        let index = 0;

        function typeWriter() {
            if (index < text.length) {
                document.getElementById("typewriter").textContent += text.charAt(index);
                index++;
                setTimeout(typeWriter, speed);
            }
        }

        window.onload = setTimeout(typeWriter, 1200);