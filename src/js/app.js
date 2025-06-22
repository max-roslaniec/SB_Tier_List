import '../css/style.scss';

document.addEventListener('DOMContentLoaded', () => {
    // --- CONFIGURAÇÃO E DADOS ---
    const characters = [
        { name: 'Barbarian King', imageUrl: '/img/Barbarian_King.webp', type: 'hero' }, { name: 'Royale King', imageUrl: '/img/Royale_King.webp', type: 'hero' }, { name: 'Archer Queen', imageUrl: '/img/Archer_Queen.webp', type: 'hero' }, { name: 'Mortis', imageUrl: '/img/Mortis.webp', type: 'hero' }, { name: 'Sonic', imageUrl: '/img/Sonic.webp', type: 'hero' }, { name: 'Archer', imageUrl: '/img/Archer.webp', type: 'squaddie' }, { name: 'Bandit', imageUrl: '/img/Bandit.webp', type: 'squaddie' }, { name: 'Barbarian', imageUrl: '/img/Barbarian.webp', type: 'squaddie' }, { name: 'Battle Healer', imageUrl: '/img/Battle_Healer.webp', type: 'squaddie' }, { name: 'Bea', imageUrl: '/img/Bea.webp', type: 'squaddie' }, { name: 'Bo', imageUrl: '/img/Bo.webp', type: 'squaddie' }, { name: 'Chicken', imageUrl: '/img/Chicken.webp', type: 'squaddie' }, { name: 'Colt', imageUrl: '/img/Colt.webp', type: 'squaddie' }, { name: 'Colonel Ruffs', imageUrl: '/img/Ruffs.webp', type: 'squaddie' }, { name: 'Dr. T', imageUrl: '/img/Dr_T.webp', type: 'squaddie' }, { name: 'Dynamike', imageUrl: '/img/Dynamike.webp', type: 'squaddie' }, { name: 'Elita-1', imageUrl: '/img/Elita-1.webp', type: 'squaddie' }, { name: 'El Primo', imageUrl: '/img/El_Primo.webp', type: 'squaddie' }, { name: 'Frank', imageUrl: '/img/Frank.webp', type: 'squaddie' }, { name: 'Goblin', imageUrl: '/img/Goblin.webp', type: 'squaddie' }, { name: 'Greg', imageUrl: '/img/Greg.webp', type: 'squaddie' }, { name: 'Heavy', imageUrl: '/img/Heavy.webp', type: 'squaddie' }, { name: 'Hog Rider', imageUrl: '/img/Hog_Rider.webp', type: 'squaddie' }, { name: 'Ice Wizard', imageUrl: '/img/Ice_Wizard.webp', type: 'squaddie' }, { name: 'Jessie', imageUrl: '/img/Jessie.webp', type: 'squaddie' }, { name: 'Knuckles', imageUrl: '/img/Knuckles.webp', type: 'squaddie' }, { name: 'Leon', imageUrl: '/img/Leon.webp', type: 'squaddie' }, { name: 'Mavis', imageUrl: '/img/Mavis.webp', type: 'squaddie' }, { name: 'Max', imageUrl: '/img/Max.webp', type: 'squaddie' }, { name: 'Medic', imageUrl: '/img/Medic.webp', type: 'squaddie' }, { name: 'Miner', imageUrl: '/img/Miner.webp', type: 'squaddie' }, { name: 'Nita', imageUrl: '/img/Nita.webp', type: 'squaddie' }, { name: 'Optimus Prime', imageUrl: '/img/Optimus_Prime.webp', type: 'squaddie' }, { name: 'Pam', imageUrl: '/img/Pam.webp', type: 'squaddie' }, { name: 'Penny', imageUrl: '/img/Penny.webp', type: 'squaddie' }, { name: 'Poco', imageUrl: '/img/Poco.webp', type: 'squaddie' }, { name: 'Tails', imageUrl: '/img/Tails.webp', type: 'squaddie' }, { name: 'Tank', imageUrl: '/img/Tank.webp', type: 'squaddie' }, { name: 'Trader', imageUrl: '/img/Trader.webp', type: 'squaddie' }, { name: 'Shelly', imageUrl: '/img/Shelly.webp', type: 'squaddie' }, { name: 'Witch', imageUrl: '/img/Witch.webp', type: 'squaddie' }, { name: 'Wizard', imageUrl: '/img/Wizard.webp', type: 'squaddie' },
    ];
    const tiers = [{ name: 'S', color: 'bg-red-600' }, { name: 'A', color: 'bg-orange-500' }, { name: 'B', color: 'bg-yellow-400' }, { name: 'C', color: 'bg-green-500' }, { name: 'D', color: 'bg-sky-500' }];

    // --- SELEÇÃO DE ELEMENTOS DO DOM ---
    const heroesPool = document.getElementById('heroes-pool');
    const squaddiesPool = document.getElementById('squaddies-pool');
    const tierBoard = document.getElementById('tier-board');
    const tierRanksContainer = document.getElementById('tier-ranks');

    // --- ESTADO DA APLICAÇÃO ---
    let draggedElement = null;
    let offsetX, offsetY;
    let boardCharacters = new Set();
    let isDraggingTouch = false;
    let touchGhostElement = null;
    let touchStartInfo = {};
    
    // --- FUNÇÕES DE INICIALIZAÇÃO E UI ---

    function setAppHeight() {
        document.documentElement.style.setProperty('--app-height', `${window.innerHeight}px`);
    }

    function populateCharacterPools() {
        const uniqueCharacters = [...new Map(characters.map((item) => [item.name, item])).values()];

        uniqueCharacters.forEach((char) => {
            const itemContainer = document.createElement('div');
            itemContainer.className = 'character-item';
            itemContainer.draggable = true;
            itemContainer.dataset.characterName = char.name;

            const img = document.createElement('img');
            img.src = char.imageUrl;
            img.alt = char.name;
            img.className = 'w-16 h-16 object-cover rounded-md pointer-events-none';

            const name = document.createElement('p');
            name.className = 'text-xs text-center text-gray-300 truncate w-full';
            name.textContent = char.name;

            itemContainer.appendChild(img);
            itemContainer.appendChild(name);

            itemContainer.addEventListener('dragstart', handleDragStartFromPool);
            itemContainer.addEventListener('touchstart', handleTouchStartFromPool, { passive: false });

            const targetPool = char.type === 'hero' ? heroesPool : squaddiesPool;
            targetPool.appendChild(itemContainer);
        });
    }

    function createTierRanks() {
        tierRanksContainer.innerHTML = ''; // Limpa antes de recriar
        tiers.forEach((tier) => {
            const rankDiv = document.createElement('div');
            rankDiv.className = `flex-1 flex items-center justify-center text-4xl lg:text-5xl font-black text-white ${tier.color}`;
            rankDiv.textContent = tier.name;
            tierRanksContainer.appendChild(rankDiv);
        });
    }

    // Função de desenhar linhas refatorada
    function drawTierLines() {
        document.querySelectorAll('.tier-line-horizontal, .tier-line-vertical').forEach((line) => line.remove());
        
        const isMobile = window.innerWidth < 1024; // Breakpoint 'lg' do Tailwind

        if (isMobile) {
            // Desenha linhas verticais
            const boardWidth = tierBoard.clientWidth;
            const tierWidth = boardWidth / tiers.length;
            tiers.forEach((_, index) => {
                if (index < tiers.length - 1) {
                    const line = document.createElement('div');
                    line.className = 'tier-line-vertical';
                    line.style.left = `${(index + 1) * tierWidth}px`;
                    tierBoard.appendChild(line);
                }
            });
        } else {
            // Desenha linhas horizontais
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

    // --- LÓGICA DE EVENTOS (MOUSE) ---

    function handleDragStartFromPool(e) {
        const charName = e.currentTarget.dataset.characterName;
        if (boardCharacters.has(charName)) {
            e.preventDefault();
            return;
        }
        const img = e.currentTarget.querySelector('img');
        e.dataTransfer.setData('image-url', img.src);
        e.dataTransfer.setData('character-name', charName);
        e.dataTransfer.setData('source', 'pool');
        setTimeout(() => e.currentTarget.classList.add('opacity-50'), 0);
    }

    function handleDragStartFromBoard(e) {
        draggedElement = e.target;
        const rect = draggedElement.getBoundingClientRect();
        offsetX = e.clientX - rect.left;
        offsetY = e.clientY - rect.top;
        draggedElement.classList.add('dragging');
        e.dataTransfer.effectAllowed = 'move';
    }

    function handleDragOver(e) {
        e.preventDefault();
        if (draggedElement) {
            const boardRect = tierBoard.getBoundingClientRect();
            let x = e.clientX - boardRect.left - offsetX;
            let y = e.clientY - boardRect.top - offsetY;
            const iconWidth = draggedElement.offsetWidth;
            const iconHeight = draggedElement.offsetHeight;
            x = Math.max(0, Math.min(x, boardRect.width - iconWidth));
            y = Math.max(0, Math.min(y, boardRect.height - iconHeight));
            draggedElement.style.left = `${x}px`;
            draggedElement.style.top = `${y}px`;
        }
    }

    function handleDragEnd() {
        document.querySelectorAll('.character-item').forEach((item) => item.classList.remove('opacity-50'));
        if (draggedElement) {
            draggedElement.classList.remove('dragging');
            draggedElement = null;
        }
    }

    function handleDrop(e) {
        e.preventDefault();
        const source = e.dataTransfer.getData('source');
        if (source === 'pool') {
            const characterName = e.dataTransfer.getData('character-name');
            if (boardCharacters.has(characterName)) return;
            const imageUrl = e.dataTransfer.getData('image-url');
            addCharacterToBoard(imageUrl, characterName, e.clientX, e.clientY);
        }
    }

    // --- LÓGICA DE EVENTOS (TOUCH) ---

    function handleTouchStartFromPool(e) {
        e.preventDefault();
        const target = e.currentTarget;
        const charName = target.dataset.characterName;

        if (boardCharacters.has(charName) || isDraggingTouch) {
            return;
        }

        isDraggingTouch = true;
        const img = target.querySelector('img');
        touchStartInfo = {
            characterName: charName,
            imageUrl: img.src,
            source: 'pool',
        };

        touchGhostElement = img.cloneNode();
        touchGhostElement.style.position = 'absolute';
        touchGhostElement.style.width = '80px';
        touchGhostElement.style.height = '80px';
        touchGhostElement.style.zIndex = '1000';
        touchGhostElement.style.opacity = '0.7';
        touchGhostElement.style.pointerEvents = 'none';
        document.body.appendChild(touchGhostElement);

        const touch = e.changedTouches[0];
        moveElementWithTouch(touch);
    }

    function handleTouchStartFromBoard(e) {
        e.preventDefault();
        if (isDraggingTouch) return;

        isDraggingTouch = true;
        draggedElement = e.currentTarget;
        const touch = e.changedTouches[0];
        const rect = draggedElement.getBoundingClientRect();
        offsetX = touch.clientX - rect.left;
        offsetY = touch.clientY - rect.top;
        draggedElement.classList.add('dragging');
    }

    function handleTouchMove(e) {
        if (!isDraggingTouch) return;
        e.preventDefault();
        const touch = e.changedTouches[0];

        if (touchGhostElement) {
            moveElementWithTouch(touch);
        } else if (draggedElement) {
            const boardRect = tierBoard.getBoundingClientRect();
            let x = touch.clientX - boardRect.left - offsetX;
            let y = touch.clientY - boardRect.top - offsetY;

            const iconWidth = draggedElement.offsetWidth;
            const iconHeight = draggedElement.offsetHeight;
            x = Math.max(0, Math.min(x, boardRect.width - iconWidth));
            y = Math.max(0, Math.min(y, boardRect.height - iconHeight));

            draggedElement.style.left = `${x}px`;
            draggedElement.style.top = `${y}px`;
        }
    }

    function handleTouchEnd(e) {
        if (!isDraggingTouch) return;

        if (touchGhostElement) {
            const touch = e.changedTouches[0];
            const dropTarget = document.elementFromPoint(touch.clientX, touch.clientY);
            
            if (tierBoard.contains(dropTarget)) {
                addCharacterToBoard(touchStartInfo.imageUrl, touchStartInfo.characterName, touch.clientX, touch.clientY);
            }
            
            document.body.removeChild(touchGhostElement);
            touchGhostElement = null;
        }

        if (draggedElement) {
            draggedElement.classList.remove('dragging');
            draggedElement = null;
        }
        
        isDraggingTouch = false;
        touchStartInfo = {};
    }

    function moveElementWithTouch(touch) {
        touchGhostElement.style.left = `${touch.clientX - 40}px`; 
        touchGhostElement.style.top = `${touch.clientY - 40}px`;
    }

    // --- FUNÇÕES DE LÓGICA COMPARTILHADA ---

    function addCharacterToBoard(imageUrl, characterName, clientX, clientY) {
        if (boardCharacters.has(characterName)) return;

        boardCharacters.add(characterName);
        document.querySelector(`.character-item[data-character-name="${characterName}"]`).classList.add('in-board');

        const wrapper = document.createElement('div');
        wrapper.className = 'board-character-wrapper';
        wrapper.draggable = true;
        wrapper.dataset.characterName = characterName;

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
        removeBtn.addEventListener('touchend', (e) => {
            e.stopPropagation();
            removeCharacterFromBoard(characterName);
        });

        wrapper.appendChild(newImg);
        wrapper.appendChild(removeBtn);

        const boardRect = tierBoard.getBoundingClientRect();
        const iconCenterOffsetX = 40;
        const iconCenterOffsetY = 40;
        wrapper.style.left = `${clientX - boardRect.left - iconCenterOffsetX}px`;
        wrapper.style.top = `${clientY - boardRect.top - iconCenterOffsetY}px`;

        wrapper.addEventListener('dragstart', handleDragStartFromBoard);
        wrapper.addEventListener('touchstart', handleTouchStartFromBoard, { passive: false });
        tierBoard.appendChild(wrapper);
    }

    function removeCharacterFromBoard(characterName) {
        boardCharacters.delete(characterName);
        document.querySelector(`.board-character-wrapper[data-character-name="${characterName}"]`).remove();
        document.querySelector(`.character-item[data-character-name="${characterName}"]`).classList.remove('in-board');
    }

    // --- PONTO DE ENTRADA DA APLICAÇÃO ---
    function init() {
        setAppHeight();
        populateCharacterPools();
        createTierRanks();
        drawTierLines();
        
        // Listeners Globais
        tierBoard.addEventListener('dragover', handleDragOver);
        tierBoard.addEventListener('drop', handleDrop);
        document.addEventListener('dragend', handleDragEnd);
        document.addEventListener('touchmove', handleTouchMove, { passive: false });
        document.addEventListener('touchend', handleTouchEnd);
        window.addEventListener('resize', () => {
            setAppHeight();
            drawTierLines();
        });
    }

    init();
});
