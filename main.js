// --- Sudden Attack Master Guide - Core Logic (Accurate Maps & Stable Video) ---

const MAP_SPRITE_URL = 'https://img-sa-file.nexon.com//DSK01/05/NX_FILE/Board/94227/02/1/000/00/01/4981021131067622407.jpg';

const mapData = {
    '3rd-supply': {
        name: '제3보급창고',
        pos: { col: 0, row: 0 },
        desc: '서든어택의 근본이자 랭크전 점유율 1위의 국민 맵입니다.',
        grenades: [
            {
                title: '레드 기지 → 블루 기지 에이롱 위폭',
                desc: '에이롱 대기 중인 블루 스나이퍼를 제압하는 필수 폭입니다.',
                video: 'I2E7D7_w5Gk',
                steps: ['레드 기지 상자 위에서 위치를 잡습니다.', '하늘의 특정 구름 끝부분을 조준합니다.', 'W키와 함께 점프 투척을 수행합니다.']
            }
        ],
        tips: [
            { icon: '🎯', title: '헤드라인 고정', content: '맵 전체의 헤드라인이 일정합니다. 에임을 항상 머리 높이에 두세요.' },
            { icon: '🔄', title: '숏 패스 연계', content: '숏 인원과 롱 인원이 동시에 진입하여 블루의 시선을 분산시키세요.' }
        ]
    },
    'dragon-road': {
        name: '드래곤로드',
        pos: { col: 1, row: 0 },
        desc: '좁은 골목과 복층 구조로 전략적인 플레이가 중요한 맵입니다.',
        grenades: [
            {
                title: '레드 → 비 사이트 낚시자리 폭',
                desc: '비 입구 박스 뒤에 숨은 수비수를 잡는 유용한 각폭입니다.',
                video: '5uI9vV_xX_8',
                steps: ['비 입구 벽면에 붙습니다.', '반대편 지붕 모서리를 조준합니다.', '제자리 투척으로 박스 뒤를 타격합니다.']
            }
        ],
        tips: [
            { icon: '👂', title: '사운드 플레이', content: '목재 바닥 소리를 통해 2층과 1층의 적 위치를 파악하세요.' }
        ]
    },
    'crossport': {
        name: '크로스포트',
        pos: { col: 2, row: 0 },
        desc: '에이 사이트의 2층 구조와 비 사이트의 개방감이 특징인 맵입니다.',
        grenades: [
            {
                title: '블루 → 에이 2층 진입폭',
                desc: '에이 2층으로 진입하는 레드를 사전에 차단하는 수비 폭입니다.',
                video: '8wY-yD8Xh0M',
                steps: ['블루 기지 계단에서 대기합니다.', '천장의 뚫린 공간을 통해 각도를 잡습니다.', '타이밍에 맞춰 던져 2층 입구를 타격합니다.']
            }
        ],
        tips: [
            { icon: '⚡', title: '에이 2층 선점', content: '에이 사이트의 승패는 2층 컨트롤에 달려 있습니다.' }
        ]
    },
    'provence': {
        name: '프로방스',
        pos: { col: 3, row: 0 },
        desc: '넓은 맵 크기로 인해 스나이퍼의 역할이 매우 중요한 맵입니다.',
        grenades: [
            {
                title: '레드 → 비 설대 뒤 위폭',
                desc: '비 사이트 깊숙이 숨은 블루를 끌어내는 전술 폭입니다.',
                video: 'YqK7Y7hU9X0',
                steps: ['비 입구 담벼락에 위치합니다.', '지붕 위의 안테나 끝을 조준합니다.', '점프 투척으로 설대 뒤를 공략합니다.']
            }
        ],
        tips: [
            { icon: '🔭', title: '스나이퍼 듀얼', content: '중앙 통로와 롱에서의 스나 대결 승리가 라운드를 가져옵니다.' }
        ]
    },
    'city-cat': {
        name: '시티캣',
        pos: { col: 0, row: 1 },
        desc: '복잡한 실내 구조와 야외 옥상이 공존하는 맵입니다.',
        grenades: [
            {
                title: '레드 → 옥상 견제폭',
                desc: '옥상에서 대기 중인 블루 스나이퍼를 압박하는 폭입니다.',
                video: 'p8T_T6vR_uE',
                steps: ['레드 기지 환풍구 근처에서 각을 잡습니다.', '옥상 난간 끝을 조준하여 높게 던집니다.']
            }
        ],
        tips: [
            { icon: '🏢', title: '옥상 장악', content: '시티캣은 옥상을 제어하는 팀이 맵 전체의 주도권을 가집니다.' }
        ]
    },
    'old-town': {
        name: '올드타운',
        pos: { col: 1, row: 1 },
        desc: '빠른 템포의 교전이 일어나는 밸런스 좋은 맵입니다.',
        grenades: [
            {
                title: '중앙 → 에이 사이트 각폭',
                desc: '중앙에서 에이로 백업 가는 인원을 자르는 폭입니다.',
                video: 'h2gzvG8S_T0',
                steps: ['중앙 박스 뒤에서 안전하게 투척 각을 잡습니다.']
            }
        ],
        tips: [
            { icon: '🏃', title: '빠른 백업', content: '올드타운은 사이트 간 거리가 짧아 빠른 백업이 필수입니다.' }
        ]
    },
    'desert2': {
        name: '데저트2',
        pos: { col: 2, row: 1 },
        desc: '전통적인 폭파 미션 맵의 정석, 데저트2입니다.',
        grenades: [
            {
                title: '레드 → 비 사이트 문폭',
                desc: '비 사이트 문 뒤에 대기 중인 블루를 잡는 국민 폭입니다.',
                video: 'mPZkdNFqePs',
                steps: ['비 롱 입구 기둥에 붙습니다.', '문의 모서리 상단을 조준하여 투척합니다.']
            }
        ],
        tips: [
            { icon: '🏰', title: '에이 사이트 수비', content: '에이 사이트는 복층 구조를 활용해 다양한 수비 각을 만드세요.' }
        ]
    },
    'trio': {
        name: '트리오',
        pos: { col: 3, row: 1 },
        desc: '중앙의 거대한 홀을 중심으로 삼거리 교전이 치열한 맵입니다.',
        grenades: [
            {
                title: '중앙 → 상대 기지 위폭',
                desc: '중앙 홀 장악 후 적 기지 리스폰 인원을 견제합니다.',
                video: 'vBvP6V92pIs',
                steps: ['중앙 대형 박스 뒤에서 각도를 잡습니다.']
            }
        ],
        tips: [
            { icon: '⚔️', title: '중앙 홀 싸움', content: '트리오는 중앙 홀을 먼저 먹는 팀이 압도적으로 유리합니다.' }
        ]
    }
};

// --- View Management ---
function showView(viewId) {
    document.querySelectorAll('.view').forEach(v => {
        v.classList.remove('active');
        v.classList.add('hidden');
    });

    const nextView = document.getElementById(viewId);
    nextView.classList.remove('hidden');
    setTimeout(() => nextView.classList.add('active'), 50);

    updateBreadcrumbs(viewId);
}

function updateBreadcrumbs(viewId) {
    const breadcrumbs = document.getElementById('breadcrumbs');
    if (viewId === 'view-main') {
        breadcrumbs.classList.add('hidden');
    } else {
        breadcrumbs.classList.remove('hidden');
        let path = '<span class="cursor-pointer hover:text-red-500" onclick="showView(\'view-main\')">메인</span>';
        if (viewId === 'view-map-list') path += ' &gt; 맵 카테고리';
        if (viewId === 'view-map-detail') path += ' &gt; <span class="cursor-pointer hover:text-red-500" onclick="showView(\'view-map-list\')">맵 목록</span> &gt; 상세 공략';
        breadcrumbs.innerHTML = path;
    }
}

// --- Render Functions ---
function getSpriteStyle(pos) {
    const x = (pos.col * (100 / 3)).toFixed(2);
    const y = (pos.row * 100).toFixed(2);
    return `background-image: url('${MAP_SPRITE_URL}'); background-size: 400% 200%; background-position: ${x}% ${y}%;`;
}

function renderMapGrid() {
    const grid = document.getElementById('map-grid');
    grid.innerHTML = '';
    
    Object.entries(mapData).forEach(([id, data]) => {
        const card = document.createElement('div');
        card.className = 'map-card group relative bg-zinc-900 rounded-xl overflow-hidden border border-zinc-800 hover:border-red-600 transition-all cursor-pointer';
        card.innerHTML = `
            <div class="h-48 overflow-hidden relative">
                <div class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" style="${getSpriteStyle(data.pos)}"></div>
                <div class="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent"></div>
            </div>
            <div class="p-4 relative">
                <div class="flex justify-between items-center mb-1">
                    <h3 class="text-xl font-bold text-white">${data.name}</h3>
                    <span class="text-[10px] bg-red-600 text-white px-1.5 rounded-sm font-black">RANKED</span>
                </div>
                <p class="text-gray-400 text-xs line-clamp-1">${data.desc}</p>
            </div>
        `;
        card.onclick = () => openMapDetail(id);
        grid.appendChild(card);
    });
}

function openMapDetail(mapId) {
    const data = mapData[mapId];
    const detailImgContainer = document.getElementById('detail-map-img').parentElement;
    
    // Replace <img> with a <div> for background sprite
    detailImgContainer.innerHTML = `
        <div class="w-full h-full" style="${getSpriteStyle(data.pos)}"></div>
        <div class="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent"></div>
        <h2 id="detail-map-title" class="absolute bottom-6 left-6 text-4xl md:text-5xl font-black text-white shadow-sm">${data.name}</h2>
    `;

    const grenadeContainer = document.getElementById('tab-grenade');
    grenadeContainer.innerHTML = '';
    
    if (data.grenades && data.grenades.length > 0) {
        data.grenades.forEach(g => {
            const item = document.createElement('div');
            item.className = 'grid lg:grid-cols-2 gap-8 items-start bg-zinc-950/50 p-6 rounded-2xl border border-zinc-800 mb-8';
            
            // Fixed YouTube embed parameters
            const youtubeUrl = `https://www.youtube.com/embed/${g.video}?autoplay=0&mute=0&controls=1&rel=0&modestbranding=1&enablejsapi=1&origin=${window.location.origin}`;
            
            item.innerHTML = `
                <div>
                    <h3 class="text-2xl font-black text-red-500 mb-4 tracking-tight">${g.title}</h3>
                    <p class="text-gray-300 mb-6 leading-relaxed">${g.desc}</p>
                    <div class="space-y-3">
                        <h4 class="text-sm font-bold uppercase text-gray-500 tracking-widest">투척 순서</h4>
                        ${g.steps.map((step, idx) => `
                            <div class="flex items-start gap-3">
                                <span class="bg-red-600 text-white text-xs font-black rounded-full w-5 h-5 flex items-center justify-center flex-shrink-0 mt-0.5">${idx + 1}</span>
                                <p class="text-gray-400 text-sm font-medium">${step}</p>
                            </div>
                        `).join('')}
                    </div>
                </div>
                <div class="video-container rounded-xl overflow-hidden shadow-2xl border border-zinc-800 bg-black aspect-video relative">
                    <iframe 
                        style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"
                        src="${youtubeUrl}" 
                        frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowfullscreen>
                    </iframe>
                </div>
            `;
            grenadeContainer.appendChild(item);
        });
    } else {
        grenadeContainer.innerHTML = '<div class="text-center py-20 text-gray-500">데이터를 준비 중입니다.</div>';
    }

    const tipsContainer = document.getElementById('tab-tips');
    tipsContainer.innerHTML = '';
    data.tips.forEach(t => {
        const item = document.createElement('div');
        item.className = 'bg-zinc-800/40 p-6 rounded-2xl border border-zinc-700/50 flex items-start gap-4 mb-4';
        item.innerHTML = `
            <div class="text-4xl">${t.icon}</div>
            <div>
                <h4 class="text-xl font-bold text-white mb-2">${t.title}</h4>
                <p class="text-gray-400 leading-relaxed">${t.content}</p>
            </div>
        `;
        tipsContainer.appendChild(item);
    });

    // Reset Tabs
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active', 'bg-red-600', 'text-white');
        btn.classList.add('bg-zinc-800', 'text-gray-300');
    });
    const defaultTab = document.querySelector('[data-tab="tab-grenade"]');
    defaultTab.classList.add('active', 'bg-red-600', 'text-white');
    defaultTab.classList.remove('bg-zinc-800', 'text-gray-300');
    
    document.getElementById('tab-grenade').classList.remove('hidden');
    document.getElementById('tab-tips').classList.add('hidden');

    showView('view-map-detail');
}

// --- Tab Logic ---
document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.onclick = () => {
        const target = btn.dataset.tab;
        document.querySelectorAll('.tab-btn').forEach(b => {
            b.classList.remove('active', 'bg-red-600', 'text-white');
            b.classList.add('bg-zinc-800', 'text-gray-300');
        });
        btn.classList.add('active', 'bg-red-600', 'text-white');
        btn.classList.remove('bg-zinc-800', 'text-gray-300');
        document.querySelectorAll('.tab-content').forEach(c => c.classList.add('hidden'));
        document.getElementById(target).classList.remove('hidden');
    };
});

// --- Initialize ---
window.onload = () => {
    renderMapGrid();
};


// --- Tab Logic ---
document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.onclick = () => {
        const target = btn.dataset.tab;
        document.querySelectorAll('.tab-btn').forEach(b => {
            b.classList.remove('active', 'bg-red-600', 'text-white');
            b.classList.add('bg-zinc-800', 'text-gray-300');
        });
        btn.classList.add('active', 'bg-red-600', 'text-white');
        btn.classList.remove('bg-zinc-800', 'text-gray-300');
        document.querySelectorAll('.tab-content').forEach(c => c.classList.add('hidden'));
        document.getElementById(target).classList.remove('hidden');
    };
});

// --- Initialize ---
window.onload = () => {
    renderMapGrid();
};
