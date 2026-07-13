import React, { useEffect } from 'react'

function useScrollReveal() {
  useEffect(() => {
    const elements = document.querySelectorAll('.fade-up')
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    )
    elements.forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])
}

const Bolt = () => (<svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>)
const BarChart = () => (<svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/><line x1="2" y1="20" x2="22" y2="20"/></svg>)
const ClockIcon = () => (<svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>)
const BookIcon = () => (<svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>)
const TrendUp = () => (<svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>)
const LayersIcon = () => (<svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>)
const CheckIcon = () => (<svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>)
const ArrowIcon = () => (<svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>)
const InstaIcon = () => (<svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>)

function Mockup() {
  const series = [{s:1,kg:'100',done:true},{s:2,kg:'100',done:true},{s:3,kg:'102.5',done:false},{s:4,kg:'102.5',done:false}]
  return (
    <div className="relative mx-auto w-full max-w-[300px]">
      <div className="absolute inset-0 blur-3xl opacity-20 rounded-3xl pointer-events-none" style={{background:'linear-gradient(135deg,#E11D2E,transparent,#C9A646)'}}/>
      <div className="relative rounded-[2rem] p-2.5 border" style={{background:'#111111',borderColor:'#262626',boxShadow:'0 40px 80px rgba(0,0,0,0.8)'}}>
        <div className="flex justify-between items-center px-4 py-2 text-[10px]" style={{color:'#737373'}}><span>9:41</span><span>100%</span></div>
        <div className="rounded-[1.5rem] p-4 space-y-3" style={{background:'#0B0B0B'}}>
          <div className="flex justify-between items-center">
            <div><p className="text-[10px] uppercase tracking-widest font-semibold" style={{color:'#737373'}}>HOY</p><p className="font-bold text-sm" style={{color:'#F5F5F5'}}>SEMANA 3 &middot; DIA 4</p></div>
            <span className="text-[10px] font-bold uppercase px-2 py-1 rounded-md" style={{background:'rgba(225,29,46,0.15)',color:'#E11D2E'}}>EN CURSO</span>
          </div>
          <div className="rounded-xl p-3 border" style={{background:'#161616',borderColor:'#262626'}}>
            <p className="text-[10px] uppercase tracking-widest font-bold mb-1" style={{color:'#C9A646'}}>EJERCICIO 2/5</p>
            <p className="font-bold" style={{color:'#F5F5F5'}}>Sentadilla Trasera</p>
            <p className="text-xs mt-0.5" style={{color:'#737373'}}>4 series &middot; 6 reps &middot; RPE 8</p>
            <div className="mt-3 space-y-1.5">
              {series.map((r) => (
                <div key={r.s} className="flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold flex-shrink-0"
                    style={{background:r.done?'rgba(34,197,94,0.2)':'#262626',color:r.done?'#22C55E':'#737373'}}>{r.done?'✓':r.s}</span>
                  <span className="text-xs flex-1" style={{color:'#A3A3A3'}}>{r.kg} kg x 6</span>
                  {!r.done && r.s===3 && <span className="text-[10px] px-2 py-0.5 rounded font-bold uppercase" style={{background:'#E11D2E',color:'white'}}>IR</span>}
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-xl p-3 border flex items-center gap-3" style={{background:'#161616',borderColor:'rgba(201,166,70,0.25)'}}>
            <div className="w-10 h-10 rounded-full border-2 flex items-center justify-center" style={{borderColor:'rgba(201,166,70,0.4)'}}><span className="text-xs font-bold" style={{color:'#C9A646'}}>1:45</span></div>
            <div><p className="text-xs" style={{color:'#A3A3A3'}}>Descanso</p><p className="text-xs font-semibold" style={{color:'#F5F5F5'}}>Proximo: Serie 3</p></div>
          </div>
          <div>
            <div className="flex justify-between text-[10px] mb-1" style={{color:'#737373'}}><span>PROGRESO</span><span className="font-bold" style={{color:'#C9A646'}}>40%</span></div>
            <div className="h-1 rounded-full overflow-hidden" style={{background:'#262626'}}><div className="h-full rounded-full" style={{width:'40%',background:'linear-gradient(90deg,#E11D2E,#C9A646)'}}/></div>
          </div>
        </div>
      </div>
    </div>
  )
}

function Hero() {
  return (
    <section id="hero" className="relative min-h-screen grid-bg flex flex-col items-center justify-center px-4 pt-24 pb-20 overflow-hidden">
      <div className="absolute top-1/3 left-1/4 w-96 h-96 rounded-full blur-[140px] pointer-events-none" style={{background:'rgba(225,29,46,0.06)'}}/>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full blur-[120px] pointer-events-none" style={{background:'rgba(201,166,70,0.05)'}}/>
      <div className="relative z-10 max-w-6xl mx-auto w-full">
        <div className="flex justify-center mb-14 fade-up">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{background:'#E11D2E'}}><span className="font-black text-xs tracking-tighter" style={{color:'white'}}>AOS</span></div>
            <span className="font-black text-xl tracking-tight" style={{color:'#F5F5F5'}}>AthleteOS</span>
          </div>
        </div>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 border rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-widest mb-8 fade-up" style={{background:'#111111',borderColor:'#262626',color:'#C9A646'}}>
              <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{background:'#C9A646'}}/>Sistema operativo del atleta
            </div>
            <h1 className="font-black uppercase leading-[0.88] fade-up" style={{fontSize:'clamp(3.2rem,8vw,6.5rem)',letterSpacing:'-0.04em',color:'#F5F5F5',marginBottom:'1.5rem'}}>
              ENTREN&#193;<br/>CON <span style={{color:'#E11D2E'}}>DIRECCI&#211;N.</span>
            </h1>
            <p className="text-lg sm:text-xl leading-relaxed max-w-lg mx-auto lg:mx-0 mb-10 fade-up" style={{color:'#A3A3A3'}}>
              El sistema operativo del atleta.<br/>Entren&#225;, registr&#225; y progres&#225; &#8212; sin una lista perdida en el celular.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start fade-up">
              <a href="https://athleteosapp.vercel.app" className="inline-flex items-center justify-center gap-2 font-bold uppercase text-sm rounded-xl transition-all duration-200 hover:opacity-90"
                style={{height:'52px',paddingLeft:'2rem',paddingRight:'2rem',background:'#E11D2E',color:'white',letterSpacing:'0.08em'}}>EMPEZAR AHORA <ArrowIcon/></a>
              <a href="#programas" className="inline-flex items-center justify-center font-bold uppercase text-sm rounded-xl transition-all duration-200"
                style={{height:'52px',paddingLeft:'2rem',paddingRight:'2rem',border:'1px solid #333333',color:'#F5F5F5',letterSpacing:'0.08em'}}>VER PROGRAMAS</a>
            </div>
            <div className="flex gap-10 justify-center lg:justify-start mt-14 fade-up">
              {[{v:'6+',l:'Programas'},{v:'200+',l:'Ejercicios'},{v:'100%',l:'Foco'}].map((s) => (
                <div key={s.l} className="text-center lg:text-left">
                  <div className="text-2xl font-black text-gradient-gold">{s.v}</div>
                  <div className="text-xs uppercase tracking-widest mt-0.5" style={{color:'#737373'}}>{s.l}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-center lg:justify-end fade-up"><Mockup/></div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 gold-separator"/>
    </section>
  )
}

function ElProblema() {
  return (
    <section className="relative py-32 px-4" style={{background:'#0B0B0B'}}>
      <div className="max-w-4xl mx-auto">
        <div className="space-y-8 fade-up">
          <p className="text-xs uppercase tracking-[0.3em] font-semibold" style={{color:'#737373'}}>EL PROBLEMA</p>
          <div className="space-y-4">
            <p className="font-black uppercase leading-[1.05]" style={{fontSize:'clamp(1.8rem,4.5vw,3.2rem)',letterSpacing:'-0.03em',color:'#F5F5F5'}}>
              LA MAYOR&#205;A NO ENTRENA MAL<br/><span style={{color:'#C9A646'}}>POR FALTA DE GANAS.</span>
            </p>
            <p className="font-black uppercase leading-[1.05]" style={{fontSize:'clamp(1.8rem,4.5vw,3.2rem)',letterSpacing:'-0.03em',color:'#737373'}}>ENTRENA SIN DIRECCI&#211;N.</p>
          </div>
          <div className="w-16 gold-separator"/>
          <div className="grid sm:grid-cols-3 gap-6 pt-4">
            {[{icon:'📋',text:'Rutinas en notas del celular que nunca se actualizan.'},{icon:'❓',text:'Sin saber que peso usar, que mejorar ni como progresar.'},{icon:'📉',text:'Entrenas, pero sin registrar. No sabes si mejoras.'}].map((item,i) => (
              <div key={i} className="flex gap-3 items-start"><span className="text-2xl flex-shrink-0">{item.icon}</span><p className="text-sm leading-relaxed" style={{color:'#737373'}}>{item.text}</p></div>
            ))}
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 gold-separator"/>
    </section>
  )
}

const FEATURES = [
  {icon:<Bolt/>,title:'Entrenamientos paso a paso',desc:'Modo foco y modo lista. Sabes exactamente que hacer, cuando y como.'},
  {icon:<BarChart/>,title:'Registro de series',desc:'Peso, reps y esfuerzo (RPE) en cada serie. Tu historial siempre disponible.'},
  {icon:<ClockIcon/>,title:'Temporizadores inteligentes',desc:'Descanso y tiempo de ejercicio con alertas. Nada se adivina.'},
  {icon:<BookIcon/>,title:'Biblioteca visual',desc:'Mas de 200 ejercicios con instrucciones claras y videos demostrativos.'},
  {icon:<TrendUp/>,title:'Progreso y adherencia',desc:'Mira tu evolucion semana a semana. Sabe si estas cumpliendo o no.'},
  {icon:<LayersIcon/>,title:'Superseries y circuitos',desc:'Estructura clara para cada tipo de entrenamiento, sin confusiones.'},
]

function Features() {
  return (
    <section id="features" className="relative grid-bg py-32 px-4" style={{background:'#070707'}}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 fade-up">
          <p className="text-xs uppercase tracking-[0.3em] font-semibold mb-4" style={{color:'#737373'}}>QUE HACE</p>
          <h2 className="font-black uppercase" style={{fontSize:'clamp(2rem,5vw,4rem)',letterSpacing:'-0.03em',color:'#F5F5F5'}}>TODO EN UN SOLO <span className="text-gradient-gold">SISTEMA.</span></h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {FEATURES.map((f,i) => (
            <div key={i} className="fade-up rounded-2xl p-6 border cursor-default"
              style={{background:'#111111',borderColor:'#262626',transition:'border-color 0.3s, background 0.3s'}}
              onMouseEnter={(e)=>{e.currentTarget.style.borderColor='rgba(201,166,70,0.6)';e.currentTarget.style.background='#161616'}}
              onMouseLeave={(e)=>{e.currentTarget.style.borderColor='#262626';e.currentTarget.style.background='#111111'}}>
              <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4" style={{background:'rgba(201,166,70,0.1)',color:'#C9A646'}}>{f.icon}</div>
              <h3 className="font-bold text-base mb-2" style={{color:'#F5F5F5'}}>{f.title}</h3>
              <p className="text-sm leading-relaxed" style={{color:'#737373'}}>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 gold-separator"/>
    </section>
  )
}

const PROGRAMAS = [
  {badge:'SALTO VERTICAL',name:'ProJump 6 Week',obj:'Aumentar tu salto vertical con metodologia especifica de potencia explosiva.',dur:'6 semanas',nivel:'Intermedio',checks:['4 dias/semana','Pliometria + Fuerza','Seguimiento de progreso'],accent:'#E11D2E'},
  {badge:'PRE-PARTIDO',name:'Game Ready Pack',obj:'Preparate fisica y mentalmente para competir al maximo nivel.',dur:'4 semanas',nivel:'Todos los niveles',checks:['3-4 dias/semana','Activacion + Potencia','Listo para jugar'],accent:'#C9A646',featured:true},
  {badge:'FUERZA / HIPERTROFIA',name:'Musculacion 5 Dias',obj:'Gana musculo y fuerza con estructura seria y periodizacion progresiva.',dur:'12 semanas',nivel:'Intermedio - Avanzado',checks:['5 dias/semana','PPL + Upper/Lower','Periodizacion progresiva'],accent:'#C9A646'},
]

function Programas() {
  return (
    <section id="programas" className="relative py-32 px-4" style={{background:'#0B0B0B'}}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 fade-up">
          <p className="text-xs uppercase tracking-[0.3em] font-semibold mb-4" style={{color:'#737373'}}>PROGRAMAS</p>
          <h2 className="font-black uppercase" style={{fontSize:'clamp(2rem,5vw,4rem)',letterSpacing:'-0.03em',color:'#F5F5F5'}}>ELEGI TU <span style={{color:'#E11D2E'}}>CAMINO.</span></h2>
          <p className="mt-4 max-w-xl mx-auto" style={{color:'#737373'}}>Programas disenados por Nahuel Recabarren para llevar tu rendimiento al siguiente nivel.</p>
        </div>
        <div className="grid sm:grid-cols-3 gap-6">
          {PROGRAMAS.map((p,i) => (
            <div key={i} className="fade-up relative rounded-2xl p-6 border"
              style={{background:p.featured?'#161616':'#111111',borderColor:p.featured?'rgba(201,166,70,0.4)':'#262626',boxShadow:p.featured?'0 0 40px rgba(201,166,70,0.07)':'none',transition:'transform 0.3s'}}
              onMouseEnter={(e)=>(e.currentTarget.style.transform='scale(1.02)')}
              onMouseLeave={(e)=>(e.currentTarget.style.transform='scale(1)')}>
              {p.featured && <div className="absolute -top-3 left-1/2 -translate-x-1/2 text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full" style={{background:'#C9A646',color:'black'}}>DESTACADO</div>}
              <span className="inline-block text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full mb-4" style={{background:p.accent+'20',color:p.accent}}>{p.badge}</span>
              <h3 className="font-black text-xl uppercase tracking-tight mb-2" style={{color:'#F5F5F5',letterSpacing:'-0.02em'}}>{p.name}</h3>
              <p className="text-sm leading-relaxed mb-4" style={{color:'#737373'}}>{p.obj}</p>
              <div className="gold-separator mb-4"/>
              <div className="flex gap-6 mb-4">
                <div><p className="text-[10px] uppercase tracking-widest" style={{color:'#737373'}}>Duracion</p><p className="text-sm font-semibold" style={{color:'#F5F5F5'}}>{p.dur}</p></div>
                <div><p className="text-[10px] uppercase tracking-widest" style={{color:'#737373'}}>Nivel</p><p className="text-sm font-semibold" style={{color:'#F5F5F5'}}>{p.nivel}</p></div>
              </div>
              <ul className="space-y-2">{p.checks.map((c,j) => (<li key={j} className="flex items-center gap-2 text-sm" style={{color:'#A3A3A3'}}><span style={{color:'#22C55E'}}><CheckIcon/></span>{c}</li>))}</ul>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 gold-separator"/>
    </section>
  )
}

function ComoFunciona() {
  const pasos = [
    {n:'01',t:'Consegúi tu acceso',d:'Crea tu cuenta en AthleteOS. Configura tu perfil y estas listo para arrancar en minutos.'},
    {n:'02',t:'Elegi tu programa',d:'Selecciona el programa que se adapte a tu objetivo. Salto, partido o musculacion.'},
    {n:'03',t:'Entrena y registra',d:'Segui cada sesion paso a paso. Anota series, pesos y progreso en tiempo real.'},
  ]
  return (
    <section id="como-funciona" className="relative grid-bg py-32 px-4" style={{background:'#070707'}}>
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-20 fade-up">
          <p className="text-xs uppercase tracking-[0.3em] font-semibold mb-4" style={{color:'#737373'}}>COMO FUNCIONA</p>
          <h2 className="font-black uppercase" style={{fontSize:'clamp(2rem,5vw,4rem)',letterSpacing:'-0.03em',color:'#F5F5F5'}}>TRES PASOS.<br/><span className="text-gradient-gold">SIN VUELTAS.</span></h2>
        </div>
        <div className="grid lg:grid-cols-3 gap-10">
          {pasos.map((p,i) => (
            <div key={i} className="fade-up text-center lg:text-left" style={{transitionDelay:(i*100)+'ms'}}>
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl border mb-6 mx-auto lg:mx-0" style={{background:'rgba(201,166,70,0.08)',borderColor:'rgba(201,166,70,0.2)'}}>
                <span className="font-black text-xl" style={{color:'#C9A646'}}>{p.n}</span>
              </div>
              <h3 className="font-black text-xl uppercase tracking-tight mb-3" style={{color:'#F5F5F5',letterSpacing:'-0.02em'}}>{p.t}</h3>
              <p className="text-sm leading-relaxed" style={{color:'#737373'}}>{p.d}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 gold-separator"/>
    </section>
  )
}

function ProJumpModal({ onClose }) {
  const [status, setStatus] = React.useState('idle')
  const [email, setEmail] = React.useState('')
  const [nombre, setNombre] = React.useState('')
  const [pedido, setPedido] = React.useState('')
  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('https://formspree.io/f/xlgkgyzr', {
        method:'POST', headers:{'Content-Type':'application/json',Accept:'application/json'},
        body: JSON.stringify({nombre,email,pedido}),
      })
      if (res.ok) setStatus('success')
      else setStatus('error')
    } catch { setStatus('error') }
  }
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4" style={{background:'rgba(0,0,0,0.85)',backdropFilter:'blur(6px)'}}
      onClick={(e) => { if (e.target===e.currentTarget) onClose() }}>
      <div className="relative w-full max-w-md rounded-2xl p-8 border" style={{background:'#111111',borderColor:'rgba(201,166,70,0.3)'}}>
        <button onClick={onClose} className="absolute top-4 right-4 text-2xl leading-none" style={{color:'#737373'}}
          onMouseEnter={e=>e.currentTarget.style.color='#F5F5F5'} onMouseLeave={e=>e.currentTarget.style.color='#737373'}>&times;</button>
        {status==='success' ? (
          <div className="text-center py-6">
            <div className="text-5xl mb-4">✅</div>
            <h3 className="font-black text-2xl uppercase mb-2" style={{color:'#F5F5F5'}}>Listo!</h3>
            <p style={{color:'#A3A3A3'}}>Recibimos tu solicitud. En las proximas horas te mandamos el codigo a tu mail.</p>
            <button onClick={onClose} className="mt-6 font-bold uppercase text-sm px-6 py-3 rounded-xl" style={{background:'#C9A646',color:'black'}}>Cerrar</button>
          </div>
        ) : (
          <>
            <div className="mb-6">
              <span className="text-xs font-black uppercase tracking-widest px-3 py-1 rounded-full" style={{background:'rgba(201,166,70,0.15)',color:'#C9A646'}}>PROJUMP MEMBER</span>
              <h3 className="font-black text-2xl uppercase mt-3 mb-1" style={{color:'#F5F5F5',letterSpacing:'-0.02em'}}>Acceso especial</h3>
              <p className="text-sm" style={{color:'#737373'}}>Completa el formulario y te mandamos tu codigo de descuento por mail.</p>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs uppercase tracking-widest mb-1.5 font-semibold" style={{color:'#737373'}}>Nombre</label>
                <input type="text" required value={nombre} onChange={e=>setNombre(e.target.value)} placeholder="Tu nombre"
                  className="w-full rounded-xl px-4 py-3 text-sm outline-none" style={{background:'#161616',border:'1px solid #262626',color:'#F5F5F5'}}
                  onFocus={e=>e.target.style.borderColor='rgba(201,166,70,0.5)'} onBlur={e=>e.target.style.borderColor='#262626'}/>
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest mb-1.5 font-semibold" style={{color:'#737373'}}>Email</label>
                <input type="email" required value={email} onChange={e=>setEmail(e.target.value)} placeholder="tu@email.com"
                  className="w-full rounded-xl px-4 py-3 text-sm outline-none" style={{background:'#161616',border:'1px solid #262626',color:'#F5F5F5'}}
                  onFocus={e=>e.target.style.borderColor='rgba(201,166,70,0.5)'} onBlur={e=>e.target.style.borderColor='#262626'}/>
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest mb-1.5 font-semibold" style={{color:'#737373'}}>Como compraste ProJump</label>
                <input type="text" required value={pedido} onChange={e=>setPedido(e.target.value)} placeholder="Ej: Hotmart, Instagram DM, email de confirmacion..."
                  className="w-full rounded-xl px-4 py-3 text-sm outline-none" style={{background:'#161616',border:'1px solid #262626',color:'#F5F5F5'}}
                  onFocus={e=>e.target.style.borderColor='rgba(201,166,70,0.5)'} onBlur={e=>e.target.style.borderColor='#262626'}/>
              </div>
              {status==='error' && <p className="text-xs" style={{color:'#E11D2E'}}>Hubo un error. Intenta de nuevo o escribinos por Instagram.</p>}
              <button type="submit" disabled={status==='sending'} className="w-full inline-flex items-center justify-center font-black uppercase text-sm rounded-xl transition-all"
                style={{height:'52px',background:'#C9A646',color:'black',letterSpacing:'0.08em',opacity:status==='sending'?0.7:1}}>
                {status==='sending'?'ENVIANDO...':'SOLICITAR CODIGO →'}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  )
}

function AccesoProJump() {
  const [showModal, setShowModal] = React.useState(false)
  const beneficios = ['ProJump integrado directamente en la app','Registro de series, pesos y progreso','Temporizadores y modo foco','Biblioteca de mas de 200 ejercicios','Seguimiento semana a semana']
  return (
    <>
      <section id="acceso" className="relative grid-bg py-32 px-4" style={{background:'#070707'}}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 fade-up">
            <p className="text-xs uppercase tracking-[0.3em] font-semibold mb-4" style={{color:'#737373'}}>ACCESO</p>
            <h2 className="font-black uppercase" style={{fontSize:'clamp(2rem,5vw,4rem)',letterSpacing:'-0.03em',color:'#F5F5F5'}}>
              YA TENES <span className="text-gradient-gold">PROJUMP.</span>
            </h2>
            <p className="mt-4 max-w-lg mx-auto" style={{color:'#A3A3A3'}}>Pedí tu código de acceso y empezá a entrenar con la app en minutos.</p>
          </div>
          <div className="fade-up max-w-lg mx-auto relative rounded-2xl p-10 border text-center" style={{background:'#161616',borderColor:'rgba(201,166,70,0.4)',boxShadow:'0 0 60px rgba(201,166,70,0.07)'}}>
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 text-[10px] font-black uppercase tracking-widest px-4 py-1 rounded-full" style={{background:'#C9A646',color:'black'}}>PROJUMP MEMBER</div>
            <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6" style={{background:'rgba(201,166,70,0.12)',border:'1px solid rgba(201,166,70,0.25)'}}>
              <span className="text-2xl">🔑</span>
            </div>
            <h3 className="font-black text-2xl uppercase mb-3" style={{color:'#F5F5F5',letterSpacing:'-0.02em'}}>Tu acceso te espera</h3>
            <p className="text-sm leading-relaxed mb-8" style={{color:'#737373'}}>Completá el formulario, verificamos tu compra y te mandamos el código por mail para activar tu cuenta.</p>
            <ul className="space-y-3 mb-8 text-left">
              {beneficios.map((item,i) => (<li key={i} className="flex items-center gap-2.5 text-sm" style={{color:'#A3A3A3'}}><span style={{color:'#22C55E'}}><CheckIcon/></span>{item}</li>))}
            </ul>
            <button onClick={() => setShowModal(true)} className="w-full inline-flex items-center justify-center gap-2 font-black uppercase text-sm rounded-xl transition-all hover:opacity-90"
              style={{height:'56px',background:'#C9A646',color:'black',letterSpacing:'0.08em'}}>PEDIR MI CÓDIGO <ArrowIcon/></button>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 gold-separator"/>
      </section>
      {showModal && <ProJumpModal onClose={() => setShowModal(false)}/>}
    </>
  )
}

function ImpactBand() {
  const frases = ['Tu progreso no se adivina. Se registra.','Calidad antes que cantidad.','No entrenes a ciegas.']
  return (
    <section className="relative border-y py-24 px-4 overflow-hidden" style={{background:'#070707',borderColor:'#1a1a1a'}}>
      <div className="absolute inset-0 pointer-events-none" style={{background:'linear-gradient(90deg,rgba(225,29,46,0.03),transparent,rgba(225,29,46,0.03))'}}/>
      <div className="max-w-4xl mx-auto space-y-10">
        {frases.map((f,i) => (
          <div key={i} className="fade-up flex items-start gap-5" style={{transitionDelay:(i*120)+'ms'}}>
            <span className="font-black text-4xl flex-shrink-0 leading-none" style={{color:'#E11D2E',marginTop:'-4px'}}>—</span>
            <p className="font-black uppercase leading-tight" style={{fontSize:'clamp(1.4rem,3.5vw,2.5rem)',letterSpacing:'-0.02em',color:'#F5F5F5'}}>{f}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

function CTAFinal() {
  return (
    <section id="cta" className="relative grid-bg py-32 px-4 overflow-hidden" style={{background:'#0B0B0B'}}>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full blur-[120px] pointer-events-none" style={{background:'rgba(225,29,46,0.07)'}}/>
      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <div className="fade-up">
          <p className="text-xs uppercase tracking-[0.3em] font-semibold mb-6" style={{color:'#737373'}}>EMPEZA HOY</p>
          <h2 className="font-black uppercase leading-[0.92] mb-4" style={{fontSize:'clamp(2.5rem,6vw,5.5rem)',letterSpacing:'-0.04em',color:'#F5F5F5'}}>
            DEJA DE ENTRENAR<br/><span style={{color:'#E11D2E'}}>SIN RUMBO.</span>
          </h2>
          <p className="text-lg mb-10 max-w-lg mx-auto" style={{color:'#A3A3A3'}}>AthleteOS te da la estructura, el seguimiento y las herramientas para entrenar de verdad.</p>
          <a href="https://athleteosapp.vercel.app" className="inline-flex items-center justify-center gap-3 font-black uppercase text-base rounded-xl transition-all duration-200 hover:opacity-90 hover:scale-105"
            style={{height:'60px',paddingLeft:'2.5rem',paddingRight:'2.5rem',background:'#E11D2E',color:'white',letterSpacing:'0.08em',boxShadow:'0 0 50px rgba(225,29,46,0.35)'}}>
            EMPEZAR CON ATHLETEOS <ArrowIcon/>
          </a>
          <p className="text-xs mt-5" style={{color:'#737373'}}>Necesitas un código para ingresar. Solicitalo arriba.</p>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="border-t py-12 px-4" style={{background:'#070707',borderColor:'#1a1a1a'}}>
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{background:'#E11D2E'}}><span className="font-black text-xs" style={{color:'white'}}>AOS</span></div>
            <span className="font-black text-base tracking-tight" style={{color:'#F5F5F5'}}>AthleteOS</span>
          </div>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-sm transition-colors" style={{color:'#737373'}}
            onMouseEnter={(e)=>(e.currentTarget.style.color='#C9A646')} onMouseLeave={(e)=>(e.currentTarget.style.color='#737373')}>
            <InstaIcon/> Instagram
          </a>
        </div>
        <div className="gold-separator my-8"/>
        <div className="flex flex-col sm:flex-row justify-between items-center gap-2 text-xs" style={{color:'#737373'}}>
          <p>&copy; {new Date().getFullYear()} AthleteOS. Todos los derechos reservados.</p>
          <p>by <span style={{color:'#A3A3A3',fontWeight:'600'}}>Nahuel Recabarren</span> &middot; <span style={{color:'#A3A3A3'}}>ProJump</span> &middot; <span style={{color:'#A3A3A3'}}>Alpha Athlete Agency</span></p>
        </div>
      </div>
    </footer>
  )
}

export default function App() {
  useScrollReveal()
  return (
    <div style={{minHeight:'100vh',background:'#070707'}}>
      <Hero/><ElProblema/><Features/><Programas/><ComoFunciona/><AccesoProJump/><ImpactBand/><CTAFinal/><Footer/>
    </div>
  )
}
