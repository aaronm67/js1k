I = function(H) { M=document.createElement(H);b.insertBefore(M,c); };
q = function(H) { i=[];for(h=j;h--;)i[h]=[]; };
r = function(H) { for(H=0;H<j;H++)for(e=k;e--;)a.fillStyle=g[H][e]?'red':'#ddd',a.fillRect(e*f+1,H*f+1,f-1,f-1); };
G = function(H) { clearInterval(u); }
L = function(H) { u=setInterval(F,O,p=0); }
Z = function(H) { V.onmouseup(E=t=1);q();F(g=i); }
F = function(H) { q();for(H=0;H<j;H++)for(e=0;e<k;e++){n=g[H][e]?-1:0;for(h=-1;2>h;h++)for(o=-1;2>o;o++)g[(j+H+h)%j][(k+e+o)%-k]&&n++;g[H][e]?1<n&&4>n&&(i[H][e]=1):3==n&&(i[H][e]=1)}g=i;S.textContent='Generation '+t++;r(); }
O = 99;
c.width = l =  innerWidth - O;
c.height = d = innerHeight - O - O;
f = ~~(d / 30);
k = ~~(l / f);
j = ~~(d / f);
D = u = p = 0;
I('h1');
M.textContent = 'Conways Game of Life';
I('p');
S = M;
I('button');
V=M;
M.onmouseup= function(H) { E=!E;V.textContent=E?L()||'End':G()||'Go' };
I('button');
M.textContent = 'Clear';
M.onmouseup= Z;
I('a');
M.textContent = 'Speed';
I('input');
M.type = 'range';
M.max = O*5;
M.value = O;
M.onchange = function(H) { O=M.value;E&&(G()||L()); };
c.onmousedown = function(H) { G(D=1); };
Z();
H = j>>1-j;
h = k>>1;
g[3+H][h-1]=g[3+H][1+h]=g[4+H][h-2]=g[4+H][2+h]=g[4+H][h]=g[5+H][h-3]=g[5+H][3+h]=g[6+H][h-2]=g[6+H][2+h]=g[7+H][h-1]=g[7+H][1+h]=g[8+H][h]=1;

c.onmousemove = c.onmouseup = function(H) {
	h=~~((H.pageY-c.offsetTop)/f);e=~~((H.pageX-c.offsetLeft)/f);/v/.test(H.type)?D?(p=1,D=0):1==p&&(g[h][e]=1):(p||(g[h][e]=!g[h][e]),D=p=0,E&&L());r();
}
r();
