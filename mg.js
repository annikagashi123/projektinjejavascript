        const correctUsername = "user123";
        const correctPassword = "pass123";
        function loginUser() {
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            const errorMessage = document.getElementById('error-message');
            
            if (username === correctUsername && password === correctPassword) {
                document.getElementById('loginform').style.display = 'none';
                document.getElementById('mrena').style.display = 'block';
                perzijimazhet(); // Shuffle the cards on login success
            } else {
                errorMessage.style.display = 'block';
            }
        }
       
       
       
       
        let flippedCards = [];
        let matchedCards = 0;
        let canFlip = true;

        const cards = document.querySelectorAll('.kardat');

        // Shuffle function
        function perzij(kard) {
            for (let i = kard.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [kard[i], kard[j]] = [kard[j], kard[i]]; 
            }
        }

        // Shuffle the cards on login success
        function perzijimazhet() {
            perzij(Array.from(cards));  
        }

        // Add event listener for cards
        cards.forEach(kardat => {
            kardat.addEventListener('click', kardatKthyme);
        });

        // Flip card logic
        function kardatKthyme() {
            if (!canFlip || this.classList.contains('flipped') || flippedCards.length === 2) {
                return;
            }

            const img = this.querySelector('img');
            img.style.display = 'block';  
            this.classList.add('flipped');  
            flippedCards.push(this);

            if (flippedCards.length === 2) {
                canFlip = false; 
                checkForMatch();  
            }
        }

        // Check if two flipped cards match
        function checkForMatch() {
            const [card1, card2] = flippedCards;
            const img1 = card1.querySelector('img').src;
            const img2 = card2.querySelector('img').src;

            if (img1 === img2) {
                card1.classList.add('matched');
                card2.classList.add('matched');
                matchedCards++;

                if (matchedCards === cards.length / 2) {
                    setTimeout(() => alert("Përshëndetje! Keni përfunduar lojën!"), 500);
                }
            } else {
                setTimeout(() => {
                    card1.classList.remove('flipped');
                    card2.classList.remove('flipped');
                    card1.querySelector('img').style.display = 'none';
                    card2.querySelector('img').style.display = 'none';
                    flippedCards = [];
                    canFlip = true;
                }, 1000); // Hide the cards after 1 second if they don't match
            }
        }

        // Login function
        