_ = Function;
I = _("H", "M=document.createElement(H);b.insertBefore(M,c)");
q = _("i=[];for(h=j;h--;)i[h]=[]");
r = _("for(H=0;H<j;H++)for(e=k;e--;)a.fillStyle=g[H][e]?'red':'#eee',a.fillRect(e*f+1,H*f+1,f-1,f-1)");
F = function() {
	q();
	for(H=0;H<j;H++)
		for(e=0;e<k;e++){
			n=g[H][e]?-1:0;						
			
			for(h=-1;2>h;h++)
				for(o=-1;2>o;o++)
					g[(j+(H+h))%j][(k+(e+o))%k]&&n++;
			
			
			g[H][e] ?
				1 < n && 4 > n 
					&& ( i[H][e] = 1 ) : 3 == n && (i[H][e] = 1)
		}
		
		g=i;S[Q]='Gen '+t++;r()
}

_("");
G = _("clearInterval(u)");
L = _("u=setInterval('F()',O),p=0");
Z = _("E=t=1;V();q();g=i;F()");
O = 99;
N = "onmouseup";
l = innerWidth - O;
d = innerHeight - O;
f = ~~(d / 30);
k = ~~(l / f);
j = ~~(d / f);
D = u = p = 0;
c.width = l;
c.height = d;
Q = "textContent";
I("p");
S = M;
W="button";
I(W);
M[N] = V = _("E=!E;this[Q]=E?L()||'Stop':G()||'Go'");
I(W);
M[Q]="Clear";
M[N]=_("Z()");
I("a");
M[Q] = "Speed";
I("input");
M.type = "range";
M.max = 500;
M.value = O;
M.onchange = _("O=M.value;E&&(G()||L())");
c.onmousedown = _("D=1;G()");
c.onmousemove = c[N] = _("a", "H=~~((a.pageY-c.offsetTop)/f);e=~~((a.pageX-c.offsetLeft)/f);/v/.test(a.type)?D?(p=1,D=0):1==p&&(g[H][e]=1):(p||(g[H][e]=!g[H][e]),D=p=0,E&&L());r()");
Z()
