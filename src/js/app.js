import '../css/style.scss';

document.addEventListener('DOMContentLoaded', () => {
    // --- ESTRUTURA DE DADOS PARA OS JOGOS ---
    const gameData = {
        squadbusters: {
            backgroundImage: `linear-gradient(rgba(14, 19, 31, 0.8), rgba(14, 19, 31, 0.9)), url('/img/bg/sb.png')`,
            characters: [
                { name: 'Barbarian King', imageUrl: '/img/squadbusters/Barbarian_King.webp', type: 'hero' }, { name: 'Royale King', imageUrl: '/img/squadbusters/Royale_King.webp', type: 'hero' }, { name: 'Archer Queen', imageUrl: '/img/squadbusters/Archer_Queen.webp', type: 'hero' }, { name: 'Mortis', imageUrl: '/img/squadbusters/Mortis.webp', type: 'hero' }, { name: 'Sonic', imageUrl: '/img/squadbusters/Sonic.webp', type: 'hero' }, { name: 'Archer', imageUrl: '/img/squadbusters/Archer.webp', type: 'squaddie' }, { name: 'Bandit', imageUrl: '/img/squadbusters/Bandit.webp', type: 'squaddie' }, { name: 'Barbarian', imageUrl: '/img/squadbusters/Barbarian.webp', type: 'squaddie' }, { name: 'Battle Healer', imageUrl: '/img/squadbusters/Battle_Healer.webp', type: 'squaddie' }, { name: 'Bea', imageUrl: '/img/squadbusters/Bea.webp', type: 'squaddie' }, { name: 'Bo', imageUrl: '/img/squadbusters/Bo.webp', type: 'squaddie' }, { name: 'Chicken', imageUrl: '/img/squadbusters/Chicken.webp', type: 'squaddie' }, { name: 'Colt', imageUrl: '/img/squadbusters/Colt.webp', type: 'squaddie' }, { name: 'Colonel Ruffs', imageUrl: '/img/squadbusters/Ruffs.webp', type: 'squaddie' }, { name: 'Dr. T', imageUrl: '/img/squadbusters/Dr_T.webp', type: 'squaddie' }, { name: 'Dynamike', imageUrl: '/img/squadbusters/Dynamike.webp', type: 'squaddie' }, { name: 'Elita-1', imageUrl: '/img/squadbusters/Elita-1.webp', type: 'squaddie' }, { name: 'El Primo', imageUrl: '/img/squadbusters/El_Primo.webp', type: 'squaddie' }, { name: 'Frank', imageUrl: '/img/squadbusters/Frank.webp', type: 'squaddie' }, { name: 'Goblin', imageUrl: '/img/squadbusters/Goblin.webp', type: 'squaddie' }, { name: 'Greg', imageUrl: '/img/squadbusters/Greg.webp', type: 'squaddie' }, { name: 'Heavy', imageUrl: '/img/squadbusters/Heavy.webp', type: 'squaddie' }, { name: 'Hog Rider', imageUrl: '/img/squadbusters/Hog_Rider.webp', type: 'squaddie' }, { name: 'Ice Wizard', imageUrl: '/img/squadbusters/Ice_Wizard.webp', type: 'squaddie' }, { name: 'Jessie', imageUrl: '/img/squadbusters/Jessie.webp', type: 'squaddie' }, { name: 'Knuckles', imageUrl: '/img/squadbusters/Knuckles.webp', type: 'squaddie' }, { name: 'Leon', imageUrl: '/img/squadbusters/Leon.webp', type: 'squaddie' }, { name: 'Mavis', imageUrl: '/img/squadbusters/Mavis.webp', type: 'squaddie' }, { name: 'Max', imageUrl: '/img/squadbusters/Max.webp', type: 'squaddie' }, { name: 'Medic', imageUrl: '/img/squadbusters/Medic.webp', type: 'squaddie' }, { name: 'Miner', imageUrl: '/img/squadbusters/Miner.webp', type: 'squaddie' }, { name: 'Nita', imageUrl: '/img/squadbusters/Nita.webp', type: 'squaddie' }, { name: 'Optimus Prime', imageUrl: '/img/squadbusters/Optimus_Prime.webp', type: 'squaddie' }, { name: 'Pam', imageUrl: '/img/squadbusters/Pam.webp', type: 'squaddie' }, { name: 'Penny', imageUrl: '/img/squadbusters/Penny.webp', type: 'squaddie' }, { name: 'Poco', imageUrl: '/img/squadbusters/Poco.webp', type: 'squaddie' }, { name: 'Tails', imageUrl: '/img/squadbusters/Tails.webp', type: 'squaddie' }, { name: 'Tank', imageUrl: '/img/squadbusters/Tank.webp', type: 'squaddie' }, { name: 'Trader', imageUrl: '/img/squadbusters/Trader.webp', type: 'squaddie' }, { name: 'Shelly', imageUrl: '/img/squadbusters/Shelly.webp', type: 'squaddie' }, { name: 'Witch', imageUrl: '/img/squadbusters/Witch.webp', type: 'squaddie' }, { name: 'Wizard', imageUrl: '/img/squadbusters/Wizard.webp', type: 'squaddie' },
            ],
            categories: {
                hero: 'Heróis',
                squaddie: 'Squaddies',
            },
        },
        gunbound: {
            backgroundImage: `linear-gradient(rgba(14, 19, 31, 0.8), rgba(14, 19, 31, 0.9)), url('/img/bg/gb.png')`,
            characters: [
                { name: 'Armour', imageUrl: '/img/gunbound/Armour.webp', type: 'mobile' }, { name: 'Mage', imageUrl: '/img/gunbound/Mage.webp', type: 'mobile' }, { name: 'Nakmachine', imageUrl: '/img/gunbound/Nakmachine.webp', type: 'mobile' }, { name: 'Trico', imageUrl: '/img/gunbound/Trico.webp', type: 'mobile' }, { name: 'Bigfoot', imageUrl: '/img/gunbound/Bigfoot.webp', type: 'mobile' }, { name: 'Boomer', imageUrl: '/img/gunbound/Boomer.webp', type: 'mobile' }, { name: 'RaonLauncher', imageUrl: '/img/gunbound/RaonLauncher.webp', type: 'mobile' }, { name: 'Lightning', imageUrl: '/img/gunbound/Lightning.webp', type: 'mobile' }, { name: 'JD', imageUrl: '/img/gunbound/JD.webp', type: 'mobile' }, { name: 'ASate', imageUrl: '/img/gunbound/ASate.webp', type: 'mobile' }, { name: 'Ice', imageUrl: '/img/gunbound/Ice.webp', type: 'mobile' }, { name: 'Turtle', imageUrl: '/img/gunbound/Turtle.webp', type: 'mobile' }, { name: 'Grub', imageUrl: '/img/gunbound/Grub.webp', type: 'mobile' }, { name: 'Aduka', imageUrl: '/img/gunbound/Aduka.webp', type: 'mobile' }, { name: 'Kalsiddon', imageUrl: '/img/gunbound/Kalsiddon.webp', type: 'mobile' }, { name: 'JFrog', imageUrl: '/img/gunbound/JFrog.webp', type: 'mobile' }, { name: 'Knight', imageUrl: '/img/gunbound/Knight.webp', type: 'mobile' }, { name: 'Dragon', imageUrl: '/img/gunbound/Dragon.webp', type: 'mobile' },
            ],
            categories: {
                mobile: 'Mobiles',
            },
        }
    };
    const tiers = [{ name: 'S', color: 'bg-red-600' }, { name: 'A', color: 'bg-orange-500' }, { name: 'B', color: 'bg-yellow-400' }, { name: 'C', color: 'bg-green-500' }, { name: 'D', color: 'bg-sky-500' }];

    // --- SELEÇÃO DE ELEMENTOS DO DOM ---
    const tierBoard = document.getElementById('tier-board');
    const tierRanksContainer = document.getElementById('tier-ranks');
    const characterListContainer = document.getElementById('character-list-container');
    const gameSelect = document.getElementById('game-select');

    // --- ESTADO DA APLICAÇÃO ---
    let draggedElement = null;
    let boardCharacters = new Set();
    
    // --- FUNÇÕES DE INICIALIZAÇÃO E UI ---

    function setAppHeight() {
        document.documentElement.style.setProperty('--app-height', `${window.innerHeight}px`);
    }

    function populateCharacterPools(gameKey) {
        const data = gameData[gameKey];
        if (!data) return;

        characterListContainer.innerHTML = '';
        
        const flexContainer = document.createElement('div');
        flexContainer.className = "flex flex-row lg:flex-col space-x-4 lg:space-x-0 lg:space-y-4";
        
        const charactersByType = data.characters.reduce((acc, char) => {
            if (!acc[char.type]) {
                acc[char.type] = [];
            }
            acc[char.type].push(char);
            return acc;
        }, {});
        
        for (const type in charactersByType) {
            const categoryContainer = document.createElement('div');
            
            const title = document.createElement('h3');
            title.className = "category-title text-lg font-semibold mb-2 whitespace-nowrap";
            title.textContent = data.categories[type] || 'Personagens';
            categoryContainer.appendChild(title);

            const poolGrid = document.createElement('div');
            poolGrid.className = "flex flex-row lg:grid lg:grid-cols-3 gap-2";
            
            charactersByType[type].forEach((char) => {
                const itemContainer = document.createElement('div');
                itemContainer.className = 'character-item';
                itemContainer.draggable = true;
                itemContainer.dataset.characterName = char.name;
                itemContainer.dataset.imageUrl = char.imageUrl; 

                const img = document.createElement('img');
                img.src = char.imageUrl;
                img.alt = char.name;
                img.className = 'w-16 h-16 object-cover rounded-md pointer-events-none';

                const name = document.createElement('p');
                name.className = 'text-xs text-center text-gray-300 truncate w-full';
                name.textContent = char.name;

                itemContainer.appendChild(img);
                itemContainer.appendChild(name);

                itemContainer.addEventListener('dragstart', handleDragStart);
                poolGrid.appendChild(itemContainer);
            });
            
            categoryContainer.appendChild(poolGrid);
            flexContainer.appendChild(categoryContainer);
        }
        
        characterListContainer.appendChild(flexContainer);
    }
    
    function createTierRanks() {
        tierRanksContainer.innerHTML = '';
        tiers.forEach((tier) => {
            const rankDiv = document.createElement('div');
            rankDiv.className = `flex-1 flex items-center justify-center text-4xl lg:text-5xl font-black text-white ${tier.color}`;
            rankDiv.textContent = tier.name;
            tierRanksContainer.appendChild(rankDiv);
        });
    }

    function drawTierLines() {
        // Remove as linhas antigas para redesenhar
        document.querySelectorAll('.tier-line-horizontal, .tier-line-vertical').forEach((line) => line.remove());
        const isMobile = window.innerWidth < 1024;

        if (isMobile) {
            const ranksWidth = tierRanksContainer.clientWidth;
            const tierWidth = ranksWidth / tiers.length;
            tiers.forEach((_, index) => {
                if (index < tiers.length - 1) {
                    const line = document.createElement('div');
                    line.className = 'tier-line-vertical';
                    line.style.left = `${(index + 1) * tierWidth}px`;
                    // A linha vertical é adicionada ao quadro principal no mobile
                    tierBoard.appendChild(line);
                }
            });
        } else {
            const boardHeight = tierBoard.clientHeight;
            const tierHeight = boardHeight / tiers.length;
            tiers.forEach((_, index) => {
                if (index < tiers.length - 1) {
                    const line = document.createElement('div');
                    line.className = 'tier-line-horizontal';
                    line.style.top = `${(index + 1) * tierHeight}px`;
                    tierBoard.appendChild(line);
                }
            });
        }
    }

    // --- LÓGICA DE EVENTOS ---

    function handleDragStart(e) {
        const charName = e.currentTarget.dataset.characterName;
        const imageUrl = e.currentTarget.dataset.imageUrl;

        if (e.currentTarget.classList.contains('board-character-wrapper')) {
            e.dataTransfer.setData('source', 'board');
        } else {
            if (boardCharacters.has(charName)) {
                e.preventDefault();
                return;
            }
            e.dataTransfer.setData('source', 'pool');
            e.dataTransfer.setData('image-url', imageUrl);
        }
        e.dataTransfer.setData('character-name', charName);
    }

    function handleDragOver(e) {
        e.preventDefault();
    }

    function handleDrop(e) {
        e.preventDefault();
        const charName = e.dataTransfer.getData('character-name');
        const source = e.dataTransfer.getData('source');
        const existingElement = document.querySelector(`.board-character-wrapper[data-character-name="${charName}"]`);
        
        if (source === 'board' && existingElement) {
            positionElement(existingElement, e.clientX, e.clientY);
        } else if (source === 'pool') {
            const imageUrl = e.dataTransfer.getData('image-url');
            addCharacterToBoard(imageUrl, charName, e.clientX, e.clientY);
        }
    }
    
    // --- FUNÇÕES DE LÓGICA COMPARTILHADA ---
    
    function positionElement(element, clientX, clientY) {
        const boardRect = tierBoard.getBoundingClientRect();
        const offsetX = element.offsetWidth / 2;
        const offsetY = element.offsetHeight / 2;
        let x = clientX - boardRect.left - offsetX;
        let y = clientY - boardRect.top - offsetY;

        const elWidth = element.offsetWidth;
        const elHeight = element.offsetHeight;
        x = Math.max(0, Math.min(x, boardRect.width - elWidth));
        y = Math.max(0, Math.min(y, boardRect.height - elHeight));

        element.style.left = `${x}px`;
        element.style.top = `${y}px`;
    }

    function addCharacterToBoard(imageUrl, characterName, clientX, clientY) {
        if (boardCharacters.has(characterName)) return;
        boardCharacters.add(characterName);
        document.querySelector(`.character-item[data-character-name="${characterName}"]`).classList.add('in-board');

        const wrapper = document.createElement('div');
        wrapper.className = 'board-character-wrapper';
        wrapper.dataset.characterName = characterName;
        wrapper.draggable = true;

        const newImg = document.createElement('img');
        newImg.src = imageUrl;
        newImg.alt = characterName;
        newImg.className = 'board-character-img rounded-lg shadow-lg';

        const removeBtn = document.createElement('div');
        removeBtn.className = 'remove-btn';
        removeBtn.innerHTML = '&times;';
        removeBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            removeCharacterFromBoard(characterName);
        });

        wrapper.appendChild(newImg);
        wrapper.appendChild(removeBtn);
        
        positionElement(wrapper, clientX, clientY);

        wrapper.addEventListener('dragstart', handleDragStart);
        tierBoard.appendChild(wrapper);
    }

    function removeCharacterFromBoard(characterName) {
        if (!characterName) return;
        boardCharacters.delete(characterName);

        const boardElement = document.querySelector(`.board-character-wrapper[data-character-name="${characterName}"]`);
        if (boardElement) boardElement.remove();

        const poolElement = document.querySelector(`.character-item[data-character-name="${characterName}"]`);
        if (poolElement) poolElement.classList.remove('in-board');
    }
    
    // --- FUNÇÃO PARA ATUALIZAR O JOGO ---
    function updateGame(gameKey) {
        const data = gameData[gameKey];
        if(!data) return;

        // Limpa o estado atual
        tierBoard.innerHTML = '';
        boardCharacters.clear();
        
        // Atualiza o background
        tierBoard.style.backgroundImage = data.backgroundImage;
        
        // Carrega os novos personagens
        populateCharacterPools(gameKey);
        
        // Redesenha as linhas para o novo layout
        drawTierLines();
    }
    
    // --- PONTO DE ENTRADA DA APLICAÇÃO ---
    function init() {
        setAppHeight();
        createTierRanks();
        
        // Listener para o dropdown
        gameSelect.addEventListener('change', (e) => updateGame(e.target.value));
        
        // Carrega o jogo padrão (Gunbound)
        updateGame('gunbound');

        window.addEventListener('resize', () => {
            setAppHeight();
            drawTierLines();
        });

        tierBoard.addEventListener('dragover', handleDragOver);
        tierBoard.addEventListener('drop', handleDrop);
    }

    init();
});