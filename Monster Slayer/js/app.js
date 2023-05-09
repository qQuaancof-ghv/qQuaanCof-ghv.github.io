new Vue({
    el: '#app',
    data: {
        playerHealth: 100,
        monsterHealth: 100,
        gameIsRunning: false,
        turns: [],
    },
    methods: {
        startNewGame: function () {
            this.gameIsRunning = true;
            this.playerHealth = 100;
            this.monsterHealth = 100;
            turns = [];
        },
        attack: function () {
            // Check Options
            if (this.checkPlayerOptions()) {
                return;
            }

            // Monster
            damage = this.inputDamage(4, 10);          
            this.monsterHealth -= damage;
            this.turns.unshift({
                isPlayer: true,
                textLog: 'Player hits Monster for ' + damage
            })
            // Player        
            this.monsterAttack();
        },
        specialAttack: function () {
            // Check Options
            if (this.checkPlayerOptions()) {
                return;
            }

            // Monster  
            damage = this.inputDamage(10, 20)        
            this.monsterHealth -= damage;
            this.turns.unshift({
                isPlayer: true,
                textLog: 'Player hits Monster for ' + damage
            })
            // Player        
            this.monsterAttack();
        },
        heal: function () {
            // Player 
            if (this.playerHealth > 70) {
                return false;
            } else if (this.playerHealth <= 60) {
                this.playerHealth += 10;
            } else {
                this.playerHealth = 70;
            }
            this.turns.unshift({
                isPlayer: true,
                textLog: 'Player heals for 10'
            })
            // Monster
            this.monsterAttack();
        },
        giveUp: function () {
            this.gameIsRunning = false;
            this.turns = [];
            this.playerHealth = 100;
            this.monsterHealth = 100;
            alert('You lost!');
        },
        monsterAttack: function () {
            damage = this.inputDamage(5, 12);          
            this.playerHealth -= damage;
            this.turns.unshift({
                isPlayer: false,
                textLog: 'Player hits Player for ' + damage
            })
            this.checkPlayerOptions();
        },
        inputDamage: function (minDamage, maxDamage) {
            return Math.max(Math.floor(Math.random() * maxDamage) + 1, minDamage);
        },
        checkPlayerOptions: function () {
            if (this.monsterHealth <= 0) {
                if (confirm('You mon! New game?')) {
                    this.startNewGame();
                    // this.gameIsRunning = true;
                    this.turns = [];
                } else {
                    this.gameIsRunning = false;
                }
                return true;
            } else if (this.playerHealth <= 0) {
                if (confirm('You lost! New game?')) {
                    this.startNewGame();
                    // this.gameIsRunning = true;
                    this.turns = [];
                } else {
                    this.gameIsRunning = false;
                }
                return true;
            };
            return;
        }
    }
});