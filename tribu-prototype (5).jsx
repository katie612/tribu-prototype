import{useState,useRef,useEffect}from"react";
const C={deepSage:"#7c9791",dark:"#535f69",grey:"#8a9ba8",light:"#dde3e3",terra:"#b2806b",white:"#ffffff",card:"#f4f7f6",sage2:"#e8efee",green:"#4a7c59",red:"#b85450"};
const sf="'Playfair Display',Georgia,serif";
const ss="-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif";
const P={h:"M3 9.5L12 3l9 6.5V21H15v-5h-6v5H3V9.5z",sh:"M12 2l8 4v6c0 5-4 9-8 10C8 21 4 17 4 12V6l8-4z",st:"M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z",car:"M5 11l2-5h10l2 5M3 11h18v7H3v-7zm2.5 4a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm13 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3z",moto:"M5.5 17a2.5 2.5 0 100-5 2.5 2.5 0 000 5zm13 0a2.5 2.5 0 100-5 2.5 2.5 0 000 5zm-8-9h6l2 5M8 8l-3 4",life:"M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z",pdf:"M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6zm0 0v6h6M10 13h4M10 17h4",hl:"M22 12h-4l-3 9L9 3 6 12H2",cont:"M6 19V9a2 2 0 012-2h8a2 2 0 012 2v10M4 11h2v8H4V11zm14 0h2v8h-2V11zm-11 4h6",pet:"M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0116 0zm-8-2v4m-2-2h4",trav:"M12 2C8 2 5 5 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-4-3-7-7-7zm0 9a2 2 0 100-4 2 2 0 000 4z",hlth:"M12 2l8 4v5c0 5.5-3.5 10-8 11C7.5 21 4 16.5 4 11V6l8-4zm0 5v6m-3-3h6",cal:"M19 4H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V6a2 2 0 00-2-2zM16 2v4M8 2v4M3 10h18",up:"M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M17 8l-5-5-5 5M12 3v12",mail:"M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2zm16 2l-8 5-8-5",cam:"M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2zM12 17a4 4 0 100-8 4 4 0 000 8z",chk:"M20 6L9 17l-5-5",star:"M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z"};
const Ic=({d,z=18,c=C.dark,w=1.5})=><svg width={z} height={z} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth={w} strokeLinecap="round" strokeLinejoin="round" style={{flexShrink:0}}><path d={d}/></svg>;
const Logo=({s=42,fn})=><img src="https://i.postimg.cc/02vLLrJP/Untitled-design-(10).png" width={s} height={s} style={{flexShrink:0,cursor:fn?"pointer":"default",objectFit:"contain"}} onClick={fn} onError={e=>e.target.style.display="none"}/>;
const Pill=({t,c,small})=><span style={{background:c,color:"#fff",fontSize:small?9:10,fontWeight:700,padding:small?"2px 7px":"3px 8px",borderRadius:11,letterSpacing:.5,textTransform:"uppercase",whiteSpace:"nowrap",fontFamily:ss}}>{t}</span>;
const SectionLbl=({ch})=><div style={{fontSize:11,letterSpacing:1.4,color:C.grey,textTransform:"uppercase",marginBottom:10,fontWeight:700,fontFamily:ss}}>{ch}</div>;
const DetailRow=({l,v,bold})=><div style={{display:"flex",justifyContent:"space-between",fontSize:13,marginBottom:6,color:C.dark,fontFamily:ss}}><span style={{color:C.grey}}>{l}</span><span style={{fontWeight:bold?700:600,color:C.dark}}>{v}</span></div>;
const Fld=({lbl,ph})=><div style={{marginBottom:8}}><label style={{fontSize:11,color:C.grey,display:"block",marginBottom:3,fontWeight:700,letterSpacing:.8,textTransform:"uppercase",fontFamily:ss}}>{lbl}</label><input style={{width:"100%",padding:"8px 11px",border:`1px solid ${C.light}`,borderRadius:7,fontSize:13,outline:"none",boxSizing:"border-box",color:C.dark,fontFamily:ss}} placeholder={ph||lbl}/></div>;
const OwnerToggle=({val,onChange})=><div style={{display:"flex"}}>{["Simone","Josh","Joint"].map((o,i)=><button key={o} onClick={()=>onChange(o)} style={{padding:"6px 14px",fontSize:12,border:`1px solid ${val===o?C.deepSage:C.light}`,background:val===o?C.deepSage:C.white,color:val===o?"#fff":C.grey,borderRadius:i===0?"7px 0 0 7px":i===2?"0 7px 7px 0":0,cursor:"pointer",fontWeight:val===o?700:500,fontFamily:ss,transition:"all .15s"}}>{o}</button>)}</div>;
const Divider=()=><div style={{height:1,background:C.light,margin:"2px 0 10px"}}/>;

const NAV=[{id:"dashboard",label:"Dashboard",p:P.h},{id:"housing",label:"Housing",p:P.h},{id:"insurance",label:"Insurance",p:P.sh},{id:"willcheck",label:"Will Check",p:P.st},{id:"super",label:"Super",p:"M12 2v20M17 5H9.5a3.5 3.5 0 100 7h5a3.5 3.5 0 110 7H6",lk:1},{id:"financial",label:"Financial",p:"M2 7h20M2 12h20M2 17h20",lk:1},{id:"children",label:"Children",p:"M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 11a4 4 0 100-8 4 4 0 000 8z",lk:1},{id:"docs",label:"Docs",p:P.pdf,lk:1},{id:"legal",label:"Legal",p:"M3 7h18M3 12h18M3 17h12",lk:1},{id:"legacy",label:"Legacy",p:P.st,lk:1},{id:"health",label:"Health",p:P.hl,lk:1}];
const INS_DATA=[{id:"asset",label:"Asset Insurance",ic:P.h,tabs:[{id:"prop",label:"Properties",items:[{n:"Home & Building",p:"NRMA",e:"12 Aug 2026",s:"active",ic:P.h,detail:true,own:"Joint"},{n:"Contents Insurance",p:"NRMA",e:"12 Aug 2026",s:"active",ic:P.cont,own:"Joint"},{n:"Landlord Insurance",s:"empty",ic:P.h,own:"Joint"}]},{id:"veh",label:"Vehicles",items:[{n:"Simone's Car",p:"GIO",e:"10 May 2026",s:"expiring",ic:P.car,own:"Simone"},{n:"Josh's Car",p:"NRMA",e:"10 May 2026",s:"task",ic:P.car,own:"Josh"},{n:"Josh's Motorbike",p:"GIO",e:"10 May 2026",s:"expiring",ic:P.moto,own:"Josh"}]}]},{id:"personal",label:"Personal Cover",ic:P.life,tabs:[{id:"pc",label:"Personal Cover",items:[{n:"Simone — Life Insurance",s:"empty",ic:P.life,own:"Simone"},{n:"Josh — Life Insurance",s:"empty",ic:P.life,own:"Josh"},{n:"Simone — TPD Insurance",s:"empty",ic:P.sh,own:"Simone"},{n:"Josh — TPD Insurance",s:"empty",ic:P.sh,own:"Josh"},{n:"Simone — Income Protection",s:"empty",ic:P.hl,own:"Simone"},{n:"Josh — Income Protection",s:"empty",ic:P.hl,own:"Josh"},{n:"Simone — Trauma Cover",s:"empty",ic:P.hlth,own:"Simone"},{n:"Josh — Trauma Cover",s:"empty",ic:P.hlth,own:"Josh"}]}]},{id:"lifestyle",label:"Life & Lifestyle",ic:P.hl,tabs:[{id:"hlth",label:"Health",items:[{n:"Family Health Insurance",s:"empty",ic:P.hlth,own:"Joint"},{n:"Simone — Private Health",s:"empty",ic:P.hlth,own:"Simone"},{n:"Josh — Private Health",s:"empty",ic:P.hlth,own:"Josh"}]},{id:"trvl",label:"Travel",items:[{n:"Annual Travel Insurance",s:"empty",ic:P.trav,own:"Joint"},{n:"Single Trip — International",s:"empty",ic:P.trav,own:"Joint"}]},{id:"pet",label:"Pet",items:[{n:"Pet Insurance",s:"empty",ic:P.pet,own:"Joint"}]},{id:"sport",label:"Sporting",items:[{n:"Sporting / Recreational Cover",s:"empty",ic:P.star,own:"Joint"}]}]}];
const WQ=[{q:"Do you currently have a will in place?",o:["Yes, I have a will","No, I don't","I'm not sure"],r:["Great — let's make sure it's up to date.","Please visit moneysmart.gov.au.","No problem — let's keep going."],rl:[0,1,0],ct:"complete"},{q:"When was your will last reviewed?",o:["Within the last 2 years","2–5 years ago","More than 5 years ago","I'm not sure"],r:["Reassuring.","It may be worth a review.","A lot can change in five years.","That's worth finding out."],ct:"review"},{q:"Who have you nominated as executor?",o:["My partner","A parent","A sibling","A solicitor","Other"],r:["Good. Let's make sure they know.","Let's capture their details.","That's a common choice.","Professional support is wise.","Let's capture the details."],ct:"complete",exec:1},{q:"Where is your will currently stored?",o:["With our solicitor","At home","In a digital service","I'm not sure","Other"],r:["That's a secure option.","Make sure your partner knows.","Good — consider a backup.","Worth finding out soon.","Thanks — noted."],ct:"review",loc:1},{q:"Have you nominated guardians for your children?",o:["Yes, in our will","No, not yet","Discussed but not formalised"],r:["One of the most important things you can do.","Schedule time to think about this.","Having the conversation is a great start."],ct:"action",gdn:1},{q:"Do you have a Power of Attorney?",o:["Yes — financial and medical","Financial only","Medical only","No"],r:["Great — let's get copies stored.","Consider adding medical too.","Consider adding financial too.","Worth considering."],ct:"complete"}];
const CH=[
  {k:"car insurance",a:"Simone's GIO car insurance renews 10 May 2026 — 67 days away. I've found this in your Insurance vault.",link:"insurance",linkLbl:"View Car Insurance"},
  {k:"roadside",a:"Your current GIO policy doesn't list roadside assistance. Worth confirming directly with GIO.",link:"insurance",linkLbl:"View Car Insurance"},
  {k:"replacement",a:"Based on your NRMA policy on file, your home is insured for $850,000 building cover and $120,000 contents.",link:"insurance",linkLbl:"View Home & Building Policy"},
  {k:"yes",a:"Done — reminder set for 10 May 2026. You'll get a notification 14 days before it's due.",link:null},
  {k:"reminder",a:"Done — I've noted that. You'll be reminded before the renewal date.",link:null}
];
const ND={from:"simonehjk@gmail.com",to:"simone.josh@vault.tribuvault.com.au",sub:"Home & Contents Insurance Renewal",rx:"Today, 9:14 am",old:{no:"HCI-2847392",exp:"12 Aug 2025",prem:"$1,650/yr",build:"$850,000",cont:"$125,000",excess:"$500"},neu:{no:"HCI-2847393",exp:"12 Aug 2026",prem:"$1,798/yr",build:"$880,000",cont:"$125,000",excess:"$500"}};
const BD=[{t:"At-a-Glance Financial Summary",rows:[["Mortgage payment","$3,880 /mo"],["Mortgage provider","CommBank"],["Interest rate","6% p.a. (fixed Mar 2027)"],["Loan balance","$950,000"]]},{t:"House & Contents Insurance",rows:[["Provider","NRMA"],["Policy number","HCI-2847392"],["Building cover","$850,000"],["Contents cover","$125,000"],["Premium","$1,650 /yr"],["Renewal date","12 Aug 2026"],["Excess","$500"]]},{t:"Mortgage Documents",docs:["Loan_Contract.pdf","Loan account: 482-XXX-XXX"]},{t:"Rates & Utilities",rows:[["Council rates","$2,500 /qtr"],["Water","~$280 /qtr"],["Electricity","~$420 /qtr"],["Gas","~$180 /qtr"],["Internet","$89 /mo"],["Total","$3,469 /qtr"]]},{t:"Warranties & Manuals",docs:["Appliance_Warranties.pdf","Building_Warranty_10yr.pdf","Renovation_Documentation.pdf"]},{t:"Certificate of Title",rows:[["Property identifier","Lot 12, DP 1234567"]],docs:["Certificate_of_Title.pdf"]},{t:"Property Inspection Reports",docs:["Pre-purchase_Inspection.pdf","Pest_Inspection.pdf"]},{t:"Strata / Body Corporate",rows:[["Quarterly levies","$1,200 /qtr"],["Strata manager","ABC Strata"]],docs:["AGM_Minutes.pdf"]}];
const MD=[{t:"Lease Summary",rows:[["Rent","$880 /wk"],["Lease end","22 Nov 2026"],["Bond","$3,520"],["Agent","Ray White Miranda"],["Contact","Sarah Chen"],["Phone","+61 2 9521 4400"],["Email","s.chen@raywhite.com"]]},{t:"House & Contents Insurance",rows:[["Provider","Budget Direct"],["Contents cover","$45,000"],["Premium","$285 /yr"],["Renewal","20 Nov 2026"]]},{t:"Rates & Utilities",rows:[["Electricity","Origin Energy"],["Gas","AGL"],["Internet","Optus"],["Water","Included"]]},{t:"Documents",docs:["Tenancy_Agreement.pdf","Bond_Lodgement_Receipt.pdf","Condition_Report.pdf"]}];
const ID=[{t:"At-a-Glance Financial Summary",rows:[["Rental income","$780 /wk"],["Mortgage","$2,650 /mo"],["Net cashflow","+$730 /mo"],["Lease expiry","28 Sep 2026"]]},{t:"Building & Landlord Insurance",rows:[["Provider","NRMA"],["Building cover","$620,000"],["Landlord liability","$10,000,000"],["Premium","$1,240 /yr"],["Renewal","28 Sep 2026"]]},{t:"Documents",docs:["Lease_Agreement.pdf","Landlord_Insurance_Policy.pdf","Certificate_of_Title.pdf"]}];
const RENEW=[{i:"Home insurance (NRMA)",d:67,link:"insurance"},{i:"Car — Simone (GIO)",d:67,link:"insurance"},{i:"Motorbike — Josh (GIO)",d:67,link:"insurance"},{i:"Tenant lease — Rosebery",d:202,link:"housing"}];
const GAPS=[{t:"No life insurance on file",link:"insurance",cat:"personal"},{t:"No health insurance on file",link:"insurance",cat:"personal"},{t:"Will check not started",link:"willcheck"},{t:"No contents insurance — Gymea Bay",link:"insurance",cat:"asset"}];
const ACT=[{t:"Simone uploaded home insurance policy",w:"2 days ago",link:"insurance"},{t:"Josh added investment property",w:"5 days ago",link:"housing"},{t:"Renewal reminder: car insurance in 67 days",w:"1 week ago",link:"insurance"}];

function Sidebar({cur,nav}){
  return<div style={{width:192,minHeight:"100vh",background:C.deepSage,display:"flex",flexDirection:"column",padding:"18px 0",flexShrink:0}}>
    <div style={{display:"flex",justifyContent:"center",marginBottom:24,padding:"0 14px"}}><div style={{width:68,height:68,borderRadius:"50%",background:"rgba(255,255,255,.18)",display:"flex",alignItems:"center",justifyContent:"center"}}><Logo s={58} fn={()=>nav("dashboard")}/></div></div>
    <div style={{flex:1}}>{NAV.map(n=><div key={n.id} onClick={()=>!n.lk&&nav(n.id)} style={{display:"flex",alignItems:"center",gap:9,padding:"9px 14px",cursor:n.lk?"default":"pointer",background:cur===n.id?"rgba(255,255,255,.22)":"transparent",borderRadius:cur===n.id?"0 22px 22px 0":0,marginRight:9,opacity:n.lk?.32:1,transition:"background .15s"}}><Ic d={n.p} z={15} c={cur===n.id?"#fff":"rgba(255,255,255,.7)"} w={cur===n.id?2:1.5}/><span style={{fontSize:13,color:cur===n.id?"#fff":"rgba(255,255,255,.78)",fontWeight:cur===n.id?600:400,fontFamily:ss}}>{n.label}</span>{n.lk&&<span style={{fontSize:9,color:"rgba(255,255,255,.32)",marginLeft:"auto",letterSpacing:.5,fontFamily:ss}}>Soon</span>}</div>)}</div>
    <div style={{padding:"10px 14px",fontSize:11,color:"rgba(255,255,255,.45)",borderTop:"1px solid rgba(255,255,255,.1)",letterSpacing:.5,fontFamily:ss}}>Settings</div>
  </div>;
}

function StoreWillModal({onClose}){
  const[mode,setMode]=useState(null);
  const OV={position:"fixed",top:0,left:0,right:0,bottom:0,background:"rgba(83,95,105,.5)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:3000};
  const Opt=({icon,title,sub,onClick})=><div onClick={onClick} style={{border:`1.5px solid ${C.light}`,borderRadius:12,padding:"16px 18px",cursor:"pointer",display:"flex",alignItems:"center",gap:14,transition:"all .15s",marginBottom:10}} onMouseEnter={e=>{e.currentTarget.style.borderColor=C.deepSage;e.currentTarget.style.background=C.sage2;}} onMouseLeave={e=>{e.currentTarget.style.borderColor=C.light;e.currentTarget.style.background="transparent";}}><div style={{width:44,height:44,borderRadius:11,background:C.sage2,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0}}><Ic d={icon} z={22} c={C.deepSage} w={1.5}/></div><div><div style={{fontSize:14,fontWeight:700,color:C.dark,marginBottom:3,fontFamily:ss}}>{title}</div><div style={{fontSize:12,color:C.grey,fontFamily:ss}}>{sub}</div></div></div>;
  return<div style={OV}><div style={{background:C.white,borderRadius:16,padding:28,maxWidth:400,width:"90%",boxShadow:"0 24px 60px rgba(0,0,0,.18)"}}>
    <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:20}}><h3 style={{fontFamily:sf,fontSize:19,fontWeight:400,color:C.dark,margin:0}}>Store your will in Tribu</h3><button onClick={onClose} style={{background:"none",border:"none",fontSize:21,cursor:"pointer",color:C.grey}}>×</button></div>
    {!mode&&<><Opt icon={P.up} title="Upload a file or take a photo" sub="PDF, JPG, PNG — up to 20MB" onClick={()=>setMode("upload")}/><Opt icon={P.mail} title="Send to your Tribu email" sub="Forward any document to your vault" onClick={()=>setMode("email")}/></>}
    {mode==="upload"&&<div><div style={{border:`2px dashed ${C.light}`,borderRadius:10,padding:"30px 20px",textAlign:"center",cursor:"pointer",marginBottom:14}} onMouseEnter={e=>e.currentTarget.style.borderColor=C.deepSage} onMouseLeave={e=>e.currentTarget.style.borderColor=C.light}><Ic d={P.up} z={30} c={C.deepSage} w={1.5}/><div style={{fontSize:14,color:C.dark,marginTop:10,marginBottom:3,fontWeight:600,fontFamily:ss}}>Click to upload or drag here</div><div style={{fontSize:12,color:C.grey,fontFamily:ss}}>PDF, JPG, PNG up to 20MB</div></div><div style={{display:"flex",alignItems:"center",gap:10,marginBottom:14}}><div style={{flex:1,height:1,background:C.light}}/><span style={{fontSize:12,color:C.grey,fontFamily:ss}}>or</span><div style={{flex:1,height:1,background:C.light}}/></div><button style={{width:"100%",padding:"11px",background:C.sage2,border:"none",borderRadius:9,fontSize:13,cursor:"pointer",color:C.dark,fontWeight:600,fontFamily:ss,display:"flex",alignItems:"center",justifyContent:"center",gap:8}}><Ic d={P.cam} z={16} c={C.deepSage} w={1.5}/>Take a photo</button><button onClick={()=>setMode(null)} style={{width:"100%",marginTop:10,padding:"9px",background:"none",border:"none",fontSize:12,cursor:"pointer",color:C.grey,fontFamily:ss}}>← Back</button></div>}
    {mode==="email"&&<div><div style={{background:C.sage2,borderRadius:10,padding:"16px 18px",marginBottom:16}}><div style={{fontSize:10,letterSpacing:1.2,textTransform:"uppercase",color:C.grey,fontWeight:700,marginBottom:6,fontFamily:ss}}>Your Tribu email address</div><div style={{fontSize:17,fontWeight:700,color:C.deepSage,fontFamily:sf}}>simone@tribuvault.com.au</div></div><div style={{fontSize:13,color:C.grey,lineHeight:1.75,marginBottom:18,fontFamily:ss}}>Forward any document to this address. Tribu will automatically classify and store it in your vault.</div><button style={{width:"100%",padding:"11px",background:C.deepSage,border:"none",borderRadius:9,fontSize:13,cursor:"pointer",color:"#fff",fontWeight:700,fontFamily:ss}}>Copy email address</button><button onClick={()=>setMode(null)} style={{width:"100%",marginTop:10,padding:"9px",background:"none",border:"none",fontSize:12,cursor:"pointer",color:C.grey,fontFamily:ss}}>← Back</button></div>}
  </div></div>;
}

function InsuranceDetail({onBack,onNav}){
  const[open,setOpen]=useState([true,true,true]);
  const tog=i=>setOpen(p=>p.map((v,j)=>j===i?!v:v));
  const sections=[
    {t:"Overview",content:<><SectionLbl ch="Insurance Ownership"/><Pill t="⚡ Joint Insurance" c={C.deepSage}/><div style={{height:10}}/><SectionLbl ch="Property Type"/><div style={{fontSize:15,color:C.dark,fontFamily:ss,fontWeight:400}}>Family Home</div></>},
    {t:"House & Contents Insurance",content:<>
      <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:14}}>
        <div><div style={{fontSize:11,color:C.grey,fontFamily:ss,marginBottom:3}}>Insurer</div><div style={{fontSize:16,fontWeight:700,color:C.dark,fontFamily:sf}}>NRMA</div></div>
        <Pill t="✓ Active" c={C.green}/>
      </div>
      <Divider/>
      {[["Policy Number","HO-2024-NSW-084721"],["Policy Type","Home & Contents"],["Effective Date","1 March 2025"],["Expiration Date","12 Aug 2026"],["Days until renewal","67 days"]].map(([l,v])=><DetailRow key={l} l={l} v={v}/>)}
    </>},
    {t:"Coverage Summary",content:<>
      {[["Building Cover","$850,000"],["Other Structures","$85,000"],["Contents Cover","$120,000"],["Temporary Accommodation","$50,000"],["Personal Liability","$20,000,000"],["Accidental Damage","$120,000"],["Total Coverage","$1,225,000"]].map(([l,v],i,ar)=><div key={l}><DetailRow l={l} v={v} bold={i===ar.length-1}/>{i===ar.length-2&&<Divider/>}</div>)}
    </>}
  ];
  return<div style={{display:"flex",flex:1,background:"#f5f3ef",minHeight:"100vh"}}>
    <div style={{flex:1,padding:"22px 28px",overflowY:"auto"}}>
      <div onClick={onBack} style={{display:"flex",alignItems:"center",gap:6,cursor:"pointer",marginBottom:16,color:C.deepSage,fontSize:13,fontWeight:600,fontFamily:ss}}><Ic d="M15 18l-6-6 6-6" z={16} c={C.deepSage} w={2}/>Back</div>
      <h1 style={{fontFamily:sf,fontSize:26,fontWeight:400,color:C.dark,margin:"0 0 22px"}}>Family Home Insurance</h1>
      {sections.map((sec,i)=><div key={i} style={{background:C.white,borderRadius:12,marginBottom:12,border:`1px solid ${C.light}`,overflow:"hidden"}}>
        <div onClick={()=>tog(i)} style={{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"14px 18px",cursor:"pointer"}}>
          <span style={{fontSize:12,letterSpacing:1.1,textTransform:"uppercase",fontWeight:700,color:C.dark,fontFamily:ss}}>{sec.t}</span>
          <Ic d={open[i]?"M18 15l-6-6-6 6":"M6 9l6 6 6-6"} z={16} c={C.grey} w={2}/>
        </div>
        {open[i]&&<div style={{padding:"4px 18px 16px"}}>{sec.content}</div>}
      </div>)}
      <div style={{background:C.sage2,borderRadius:12,padding:"14px 18px",border:`1px solid ${C.light}`}}>
        <div style={{fontSize:13,color:C.grey,fontFamily:ss,fontStyle:"italic"}}>Is there something you want to find in this document?</div>
      </div>
    </div>
    <div style={{width:220,padding:"22px 18px",flexShrink:0,alignSelf:"flex-start",position:"sticky",top:22}}>
      <div style={{background:C.white,borderRadius:12,padding:14,border:`1px solid ${C.light}`,marginBottom:10}}>
        <div style={{height:90,background:C.sage2,borderRadius:8,display:"flex",alignItems:"center",justifyContent:"center",marginBottom:12}}><Ic d={P.h} z={36} c={C.deepSage} w={1}/></div>
        <div style={{fontSize:13,fontWeight:700,color:C.dark,fontFamily:ss,marginBottom:2}}>Home</div>
        <div style={{fontSize:12,color:C.grey,fontFamily:ss}}>22 Edward Street, Bondi NSW 2026</div>
      </div>
      <div onClick={()=>{}} style={{background:C.white,borderRadius:12,padding:"11px 14px",border:`1px solid ${C.light}`,marginBottom:10,cursor:"pointer",display:"flex",alignItems:"center",gap:10}}><Ic d={P.pdf} z={16} c={C.terra} w={1.5}/><div><div style={{fontSize:13,fontWeight:600,color:C.dark,fontFamily:ss}}>View policy</div><div style={{fontSize:11,color:C.grey,fontFamily:ss}}>PDF · 128KB</div></div></div>
      <button style={{width:"100%",padding:"11px",background:C.dark,border:"none",borderRadius:10,fontSize:13,cursor:"pointer",color:"#fff",fontWeight:600,fontFamily:ss,display:"flex",alignItems:"center",justifyContent:"center",gap:7}}><Ic d={P.star} z={14} c="#fff" w={1.5}/>Quick check</button>
    </div>
  </div>;
}

function PropDetail({type,onBack}){
  const b=type==="bondi",inv=type==="invest";
  const data=b?BD:inv?ID:MD;
  const[open,setOpen]=useState(data.map(()=>true));
  const[owner,setOwner]=useState("Joint");
  const[propImg,setPropImg]=useState(null);
  const imgRef=useRef(null);
  const tog=i=>setOpen(p=>p.map((v,j)=>j===i?!v:v));
  const title=b?"Home (Owner-Occupied)":inv?"Investment — Rosebery NSW 2018":"Rental — Miranda NSW 2228";
  const addr=b?"22 Edward Street, Bondi NSW 2026":inv?"28/7-11 Henderson Street, Rosebery NSW 2018":"80/8-14 Willock Avenue, Miranda NSW 2228";
  const badge=b?"Primary Residence":inv?"Investment Property":"Rental";
  return<div style={{display:"flex",flex:1,background:"#f5f3ef",minHeight:"100vh"}}>
    <div style={{flex:1,padding:"22px 28px",overflowY:"auto"}}>
      <div onClick={onBack} style={{display:"flex",alignItems:"center",gap:6,cursor:"pointer",marginBottom:14,color:C.deepSage,fontSize:13,fontWeight:600,fontFamily:ss}}><Ic d="M15 18l-6-6 6-6" z={16} c={C.deepSage} w={2}/>Back to Housing</div>
      <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:20}}>
        <div><span style={{fontSize:10,letterSpacing:1.2,textTransform:"uppercase",fontWeight:700,color:C.grey,fontFamily:ss}}>{badge}</span><h1 style={{fontFamily:sf,fontSize:24,fontWeight:400,color:C.dark,margin:"4px 0 3px"}}>{title}</h1><div style={{fontSize:13,color:C.grey,fontFamily:ss}}>{addr}</div></div>
        <OwnerToggle val={owner} onChange={setOwner}/>
      </div>
      {data.map((sec,i)=><div key={i} style={{background:C.white,borderRadius:12,marginBottom:8,border:`1px solid ${C.light}`,overflow:"hidden"}}>
        <div onClick={()=>tog(i)} style={{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"12px 16px",cursor:"pointer"}}>
          <span style={{fontSize:11,letterSpacing:1.1,textTransform:"uppercase",fontWeight:700,color:C.dark,fontFamily:ss}}>{sec.t}</span>
          <Ic d={open[i]?"M18 15l-6-6-6 6":"M6 9l6 6 6-6"} z={15} c={C.grey} w={2}/>
        </div>
        {open[i]&&<div style={{padding:"2px 16px 14px"}}>{sec.rows?.map(([l,v])=><DetailRow key={l} l={l} v={v}/>)}{sec.docs?.map(d=><div key={d} style={{display:"flex",alignItems:"center",gap:7,padding:"5px 0",fontSize:13,color:C.dark,fontFamily:ss}}><Ic d={P.pdf} z={14} c="#e84135" w={1.5}/>{d}</div>)}</div>}
      </div>)}
      <button style={{marginTop:6,padding:"9px 18px",background:C.deepSage,color:"#fff",border:"none",borderRadius:8,fontSize:13,cursor:"pointer",fontWeight:600,fontFamily:ss}}>+ Add Document</button>
    </div>
    <div style={{width:210,padding:"22px 16px",flexShrink:0,alignSelf:"flex-start",position:"sticky",top:22}}>
      <div style={{background:C.white,borderRadius:12,padding:14,border:`1px solid ${C.light}`,marginBottom:10}}>
        <input ref={imgRef} type="file" accept="image/*" style={{display:"none"}} onChange={e=>{const f=e.target.files[0];if(f){const r=new FileReader();r.onload=ev=>setPropImg(ev.target.result);r.readAsDataURL(f);}}}/>
        <div onClick={()=>imgRef.current?.click()} style={{height:100,background:propImg?"transparent":C.sage2,borderRadius:8,display:"flex",alignItems:"center",justifyContent:"center",marginBottom:12,cursor:"pointer",overflow:"hidden",position:"relative",border:`1.5px dashed ${propImg?"transparent":C.light}`,transition:"all .2s"}} onMouseEnter={e=>{if(!propImg)e.currentTarget.style.borderColor=C.deepSage;}} onMouseLeave={e=>{if(!propImg)e.currentTarget.style.borderColor=C.light;}}>{propImg?<img src={propImg} style={{width:"100%",height:"100%",objectFit:"cover",borderRadius:7}} alt="property"/>:<div style={{textAlign:"center"}}><Ic d={P.cam} z={22} c={C.deepSage} w={1.5}/><div style={{fontSize:10,color:C.grey,fontFamily:ss,marginTop:4}}>Add photo</div></div>}</div>
        <div style={{fontSize:13,fontWeight:700,color:C.dark,fontFamily:ss,marginBottom:2}}>{b?"Home":inv?"Investment":"Rental"}</div>
        <div style={{fontSize:11,color:C.grey,fontFamily:ss,marginBottom:6,lineHeight:1.4}}>{addr}</div>
        {b&&<Pill t="Primary Residence" c={C.deepSage} small/>}{inv&&<Pill t="Investment Property" c={C.terra} small/>}
      </div>
      <button style={{width:"100%",padding:"11px",background:C.dark,border:"none",borderRadius:10,fontSize:13,cursor:"pointer",color:"#fff",fontWeight:600,fontFamily:ss,display:"flex",alignItems:"center",justifyContent:"center",gap:7}}><Ic d={P.star} z={14} c="#fff" w={1.5}/>Quick check</button>
    </div>
  </div>;
}

function Housing({nav}){
  const[tab,setTab]=useState("own");
  const[detail,setDetail]=useState(null);
  const[owner,setOwner]=useState("Joint");
  if(detail==="insdetail")return<InsuranceDetail onBack={()=>setDetail(null)} onNav={nav}/>;
  if(detail)return<PropDetail type={detail} onBack={()=>setDetail(null)}/>;
  const PC=({badge,bc,addr,suburb,rows,fn,tag})=><div style={{background:C.white,borderRadius:14,padding:18,border:`1px solid ${C.light}`,transition:"all .18s",boxShadow:"0 1px 4px rgba(83,95,105,.06)",display:"flex",flexDirection:"column"}} onMouseEnter={e=>{e.currentTarget.style.boxShadow="0 4px 18px rgba(83,95,105,.12)";e.currentTarget.style.transform="translateY(-2px)";}} onMouseLeave={e=>{e.currentTarget.style.boxShadow="0 1px 4px rgba(83,95,105,.06)";e.currentTarget.style.transform="none";}}>
    <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:12}}>
      <div><div style={{fontSize:10,letterSpacing:1.1,textTransform:"uppercase",color:bc,marginBottom:4,fontWeight:700,fontFamily:ss}}>{badge}</div><div style={{fontSize:15,fontWeight:700,color:C.dark,marginBottom:1,fontFamily:sf}}>{addr}</div><div style={{fontSize:12,color:C.grey,fontFamily:ss}}>{suburb}</div></div>
      <div style={{display:"flex",flexDirection:"column",gap:5,alignItems:"flex-end"}}><div style={{background:bc,borderRadius:8,padding:"6px 8px",opacity:.85}}><Ic d={P.h} z={18} c="#fff" w={2}/></div>{tag&&<Pill t={tag} c={C.terra} small/>}</div>
    </div>
    <div style={{background:C.sage2,borderRadius:8,padding:"10px 12px",marginBottom:12,flex:1}}>{rows.map(([l,v])=><div key={l} style={{display:"flex",justifyContent:"space-between",fontSize:12,marginBottom:5,paddingBottom:4,borderBottom:`1px solid ${C.light}`}}><span style={{color:C.grey,fontFamily:ss}}>{l}</span><span style={{fontWeight:700,color:C.dark,fontFamily:ss}}>{v}</span></div>)}</div>
    <button onClick={fn} style={{width:"100%",padding:"9px",background:"none",border:`1px solid ${C.deepSage}`,borderRadius:8,fontSize:12,cursor:"pointer",color:C.deepSage,fontWeight:700,fontFamily:ss,transition:"all .15s"}} onMouseEnter={e=>{e.currentTarget.style.background=C.deepSage;e.currentTarget.style.color="#fff";}} onMouseLeave={e=>{e.currentTarget.style.background="none";e.currentTarget.style.color=C.deepSage;}}>View full details →</button>
  </div>;
  return<div style={{background:C.white,minHeight:"100vh",padding:"22px 32px"}}>
    <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:18}}>
      <div style={{display:"flex",alignItems:"center",gap:12}}>
        <div onClick={()=>nav("dashboard")} style={{display:"flex",alignItems:"center",gap:5,cursor:"pointer",color:C.deepSage,fontSize:13,fontWeight:600,fontFamily:ss}}><Ic d="M15 18l-6-6 6-6" z={16} c={C.deepSage} w={2}/>Back</div>
        <h1 style={{fontFamily:sf,fontSize:26,fontWeight:400,color:C.dark,margin:0,paddingLeft:12,borderLeft:`1px solid ${C.light}`,marginLeft:4}}>Housing</h1>
      </div>
      <OwnerToggle val={owner} onChange={setOwner}/>
    </div>
    <div style={{display:"flex",gap:0,marginBottom:20}}>{[["own","I Own"],["rent","I Rent"],["invest","Investment"]].map(([id,lbl],i)=><button key={id} onClick={()=>setTab(id)} style={{padding:"8px 20px",fontSize:13,border:`1px solid ${tab===id?C.deepSage:C.light}`,background:tab===id?C.deepSage:C.white,color:tab===id?"#fff":C.grey,borderRadius:i===0?"8px 0 0 8px":i===2?"0 8px 8px 0":0,cursor:"pointer",fontWeight:tab===id?700:500,fontFamily:ss,transition:"all .15s"}}>{lbl}</button>)}</div>
    {tab==="own"&&<div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:14,marginBottom:20}}><PC badge="Primary Residence" bc={C.deepSage} addr="22 Edward Street" suburb="Bondi NSW 2026" rows={[["Ownership","Joint"],["Mortgage","$3,880 /mo"],["Rate","6% fixed Mar 2027"],["Balance","$950,000"],["Insurance","NRMA — Active"]]} fn={()=>setDetail("bondi")}/><div style={{background:C.white,borderRadius:14,padding:20,border:`2px dashed ${C.light}`,display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",minHeight:140,fontSize:13,color:C.grey,flexDirection:"column",gap:6,fontFamily:ss,transition:"all .15s"}} onMouseEnter={e=>{e.currentTarget.style.borderColor=C.terra;e.currentTarget.style.color=C.terra;}} onMouseLeave={e=>{e.currentTarget.style.borderColor=C.light;e.currentTarget.style.color=C.grey;}}><span style={{fontSize:22}}>+</span>Add another property</div></div>}
    {tab==="rent"&&<div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:14,marginBottom:20}}><PC badge="Rental — Primary Residence" bc={C.deepSage} addr="80/8-14 Willock Avenue" suburb="Miranda NSW 2228" rows={[["Ownership","Simone"],["Rent","$880 /wk"],["Lease end","22 Nov 2026"],["Bond","$3,520"],["Agent","Ray White Miranda"]]} fn={()=>setDetail("rental")}/></div>}
    {tab==="invest"&&<div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:14,marginBottom:20}}><PC badge="Investment Property" bc={C.terra} addr="28/7-11 Henderson Street" suburb="Rosebery NSW 2018" rows={[["Ownership","Joint"],["Rental income","$780 /wk"],["Mortgage","$2,650 /mo"],["Net cashflow","+$730 /mo"],["Lease expiry","28 Sep 2026"]]} fn={()=>setDetail("invest")} tag="Positive Cashflow"/></div>}
    <div style={{background:C.sage2,borderRadius:12,padding:"16px 20px",border:`1px solid ${C.light}`}}>
      <div style={{display:"flex",alignItems:"flex-start",gap:10,marginBottom:12}}><div style={{width:32,height:32,borderRadius:8,background:`${C.terra}15`,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,marginTop:1}}><Ic d="M12 2l2 7h7l-5.5 4 2 7L12 16l-5.5 4 2-7L3 9h7z" z={17} c={C.terra} w={1.5}/></div><div><div style={{fontSize:13,fontWeight:700,color:C.dark,fontFamily:sf}}>Optimise your housing</div><div style={{fontSize:12,color:C.grey,fontFamily:ss}}>Suggested actions to protect and save</div></div></div>
      <div style={{display:"flex",flexDirection:"column",gap:7}}>{["Add a 30-day reminder before your home insurance renews","Add a reminder to check your mortgage rate against the current market"].map((t,i)=><div key={i} style={{display:"flex",justifyContent:"space-between",alignItems:"center",background:C.white,borderRadius:8,padding:"10px 14px",border:`1px solid ${C.light}`}}><span style={{fontSize:13,color:C.dark,fontFamily:ss}}>{t}</span><button style={{flexShrink:0,marginLeft:10,padding:"5px 12px",background:C.deepSage,border:"none",borderRadius:6,fontSize:11,cursor:"pointer",color:"#fff",fontWeight:700,fontFamily:ss}}>+ Add</button></div>)}</div>
    </div>
  </div>;
}

function Insurance({showNotif,nav,initCat}){
  const[cat,setCat]=useState(initCat||"asset");
  const[tab,setTab]=useState("prop");
  const[owner,setOwner]=useState("Joint");
  const[showIns,setShowIns]=useState(false);
  if(showIns)return<InsuranceDetail onBack={()=>setShowIns(false)} onNav={nav}/>;
  const cc=INS_DATA.find(c=>c.id===cat);
  const ct=cc?.tabs.find(t=>t.id===tab)||cc?.tabs[0];
  return<div style={{background:C.white,minHeight:"100vh",padding:"22px 32px"}}>
    <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:14}}>
      <div style={{display:"flex",alignItems:"center",gap:12}}>
        <div onClick={()=>nav("dashboard")} style={{display:"flex",alignItems:"center",gap:5,cursor:"pointer",color:C.deepSage,fontSize:13,fontWeight:600,fontFamily:ss}}><Ic d="M15 18l-6-6 6-6" z={16} c={C.deepSage} w={2}/>Back</div>
        <h1 style={{fontFamily:sf,fontSize:26,fontWeight:400,color:C.dark,margin:0,paddingLeft:12,borderLeft:`1px solid ${C.light}`,marginLeft:4}}>Insurances</h1>
      </div>
      <OwnerToggle val={owner} onChange={setOwner}/>
    </div>
    <div style={{display:"flex",gap:8,marginBottom:18,flexWrap:"wrap"}}><button onClick={()=>{setCat("all");}} style={{display:"flex",alignItems:"center",gap:6,padding:"8px 16px",fontSize:12,border:`1px solid ${cat==="all"?C.deepSage:C.light}`,background:cat==="all"?C.deepSage:C.white,color:cat==="all"?"#fff":C.grey,borderRadius:20,cursor:"pointer",fontWeight:cat==="all"?700:500,fontFamily:ss,transition:"all .15s"}}><Ic d="M4 6h16M4 10h16M4 14h16M4 18h16" z={13} c={cat==="all"?"#fff":C.grey} w={1.5}/>All</button>{INS_DATA.map(c2=><button key={c2.id} onClick={()=>{setCat(c2.id);setTab(c2.tabs[0].id);}} style={{display:"flex",alignItems:"center",gap:6,padding:"8px 16px",fontSize:12,border:`1px solid ${cat===c2.id?C.deepSage:C.light}`,background:cat===c2.id?C.deepSage:C.white,color:cat===c2.id?"#fff":C.grey,borderRadius:20,cursor:"pointer",fontWeight:cat===c2.id?700:500,fontFamily:ss,transition:"all .15s"}}><Ic d={c2.ic} z={13} c={cat===c2.id?"#fff":C.grey} w={1.5}/>{c2.label}</button>)}</div>
    {cc?.tabs.length>1&&<div style={{display:"flex",marginBottom:14}}>{cc.tabs.map((t2,i)=><button key={t2.id} onClick={()=>setTab(t2.id)} style={{padding:"7px 16px",fontSize:12,border:`1px solid ${C.light}`,background:tab===t2.id?C.sage2:C.white,color:tab===t2.id?C.dark:C.grey,borderRadius:i===0?"7px 0 0 7px":i===cc.tabs.length-1?"0 7px 7px 0":0,cursor:"pointer",fontWeight:tab===t2.id?700:500,fontFamily:ss}}>{t2.label}</button>)}</div>}
    <div style={{background:C.sage2,borderRadius:12,padding:"16px 20px",marginBottom:14,border:`1px solid ${C.light}`}}>
      <div style={{display:"flex",alignItems:"center",gap:9,marginBottom:12}}><Ic d={P.sh} z={18} c={C.terra} w={1.5}/><div><div style={{fontSize:13,fontWeight:700,color:C.dark,fontFamily:ss}}>Upcoming renewals</div><div style={{fontSize:12,color:C.grey,fontFamily:ss}}>Policies expiring across your vault</div></div></div>
      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:8}}>{[["30 days",[["Home & Building",true],["Car (Simone)",true]],C.red],["60 days",[["Car (Josh)",true],["Motorbike",false]],C.terra],["90 days",[["Tenant lease — Rosebery",false]],C.deepSage]].map(([period,items,col])=><div key={period} style={{background:C.white,borderRadius:9,padding:"11px 14px",border:`1px solid ${C.light}`}}><div style={{fontSize:11,letterSpacing:.8,textTransform:"uppercase",fontWeight:700,color:col,fontFamily:ss,marginBottom:6}}>{period}</div><div style={{display:"flex",flexDirection:"column",gap:3}}>{items.map(([item,linked])=><div key={item} onClick={linked?()=>{}:undefined} style={{fontSize:12,color:linked?C.deepSage:C.dark,fontFamily:ss,cursor:linked?"pointer":"default",textDecoration:linked?"underline":"none",textDecorationColor:`${C.deepSage}44`,fontWeight:linked?600:400}}>{item}</div>)}</div></div>)}</div>
    </div>
    <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:12}}>{(cat==="all"?INS_DATA.flatMap(c2=>c2.tabs.flatMap(t2=>t2.items)):ct?.items||[]).map((it,i)=><div key={i} onClick={it.detail?()=>setShowIns(true):undefined} style={{background:C.white,borderRadius:13,padding:16,border:`1px solid ${C.light}`,position:"relative",cursor:it.detail?"pointer":"default",transition:"all .15s",boxShadow:"0 1px 4px rgba(83,95,105,.04)"}} onMouseEnter={e=>{if(it.detail){e.currentTarget.style.boxShadow="0 4px 18px rgba(83,95,105,.12)";e.currentTarget.style.transform="translateY(-2px)";}}} onMouseLeave={e=>{e.currentTarget.style.boxShadow="0 1px 4px rgba(83,95,105,.04)";e.currentTarget.style.transform="none";}}>{it.s==="expiring"&&<div style={{position:"absolute",top:8,right:8}}><Pill t="Expiring" c={C.terra}/></div>}{it.s==="task"&&<div style={{position:"absolute",top:8,right:8}}><Pill t="1 Task" c={C.red}/></div>}<div style={{height:46,display:"flex",alignItems:"center",justifyContent:"center",marginBottom:8}}><Ic d={it.ic} z={30} c={it.s==="empty"?C.light:C.deepSage} w={1.5}/></div><div style={{fontSize:13,fontWeight:700,color:C.dark,marginBottom:3,fontFamily:ss}}>{it.n}</div>{it.own&&<div style={{fontSize:11,color:C.grey,marginBottom:3,fontFamily:ss}}>Ownership: <span style={{fontWeight:600,color:it.own==="Joint"?C.deepSage:C.dark}}>{it.own}</span></div>}{it.p&&<div style={{fontSize:12,color:C.grey,marginBottom:2,fontFamily:ss}}>Provider: <span style={{fontWeight:600,color:C.dark}}>{it.p}</span></div>}{it.e&&<div style={{fontSize:12,color:C.grey,fontFamily:ss}}>Ends: <span style={{fontWeight:600,color:C.dark}}>{it.e}</span></div>}{it.s==="empty"&&<><button style={{marginTop:8,fontSize:11,padding:"5px 10px",background:C.sage2,border:"none",borderRadius:5,cursor:"pointer",color:C.dark,fontWeight:600,fontFamily:ss}}>+ Add policy</button><div style={{fontSize:10,color:C.grey,marginTop:4,fontFamily:ss}}>Takes 30 seconds</div></>}{it.detail&&<div style={{marginTop:8,paddingTop:8,borderTop:`1px solid ${C.light}`}}><span style={{fontSize:11,color:C.deepSage,fontWeight:700,fontFamily:ss,cursor:"pointer"}}>See details →</span></div>}</div>)}</div>
    <div style={{marginTop:16}}><div onClick={showNotif} style={{background:"#fdf8f3",border:`1.5px solid ${C.terra}44`,borderRadius:12,padding:"12px 16px",marginBottom:18,cursor:"pointer",display:"flex",alignItems:"center",gap:10,transition:"border-color .15s"}} onMouseEnter={e=>e.currentTarget.style.borderColor=C.terra} onMouseLeave={e=>e.currentTarget.style.borderColor=`${C.terra}44`}>
      <div style={{width:30,height:30,borderRadius:"50%",background:`${C.terra}15`,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0}}><Ic d={P.pdf} z={15} c={C.terra} w={1.5}/></div>
      <div style={{flex:1}}><div style={{display:"flex",alignItems:"center",gap:7,marginBottom:3,flexWrap:"wrap"}}><span style={{fontSize:13,fontWeight:700,color:C.dark,fontFamily:ss}}>Simone sent a renewal to your Tribu email</span></div><div style={{display:"flex",alignItems:"center",gap:8}}><div style={{fontSize:12,color:C.grey,fontFamily:ss}}>NRMA Home & Contents — tap to review and confirm</div><Pill t="Review required" c={C.deepSage}/></div></div>
      <span style={{fontSize:14,color:C.terra}}>→</span>
    </div></div>
  </div>;
}

function WillCheck({nav}){
  const[step,setStep]=useState(0);const[answers,setAnswers]=useState([]);const[sel,setSel]=useState(null);const[resp,setResp]=useState(false);const[inf,setInf]=useState(null);const[execN,setExN]=useState(null);const[done,setDone]=useState(false);const[showStore,setShowStore]=useState(false);
  const q=WQ[step];
  const next=()=>{setAnswers(a=>[...a,{step,sel}]);setSel(null);setResp(false);setInf(null);setExN(null);if(step>=WQ.length-1)setDone(true);else setStep(s=>s+1);};
  const back=()=>{if(step>0){setStep(s=>s-1);setResp(false);setSel(null);setInf(null);setExN(null);setAnswers(a=>a.slice(0,-1));}};
  const card=(ch)=><div style={{marginLeft:46,marginTop:8,background:C.sage2,borderRadius:9,padding:12,border:`1px solid ${C.light}`}}>{ch}</div>;
  const inform=(v,fn)=><><div style={{fontSize:11,color:C.grey,marginTop:10,marginBottom:5,fontWeight:700,letterSpacing:.8,textTransform:"uppercase",fontFamily:ss}}>Have they been informed?</div><div style={{display:"flex",gap:5}}>{["Yes","No","Not sure"].map(o=><button key={o} onClick={()=>fn(o)} style={{flex:1,padding:"6px",fontSize:12,background:v===o?C.deepSage:C.white,color:v===o?"#fff":C.grey,border:`1px solid ${v===o?C.deepSage:C.light}`,borderRadius:5,cursor:"pointer",fontWeight:v===o?700:500,fontFamily:ss}}>{o}</button>)}</div></>;
  if(done){const cts=answers.map((_,i)=>WQ[i].ct);return<div style={{maxWidth:560,margin:"0 auto",padding:"32px 0"}}>{showStore&&<StoreWillModal onClose={()=>setShowStore(false)}/>}<div style={{background:C.white,borderRadius:16,padding:28,boxShadow:"0 2px 20px rgba(83,95,105,.08)",border:`1px solid ${C.light}`}}><div style={{textAlign:"center",marginBottom:20}}><div style={{width:50,height:50,borderRadius:"50%",background:C.sage2,border:`2px solid ${C.deepSage}33`,display:"flex",alignItems:"center",justifyContent:"center",margin:"0 auto 14px"}}><Ic d={P.chk} z={22} c={C.deepSage} w={2.5}/></div><h2 style={{fontFamily:sf,fontSize:22,fontWeight:400,color:C.dark,marginBottom:4}}>You have taken a really important step today.</h2></div><div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:10,marginBottom:20}}>{[[cts.filter(c=>c==="complete").length,C.green,"Complete",["Will confirmed","Executor captured","POA noted"]],[cts.filter(c=>c==="review").length,C.terra,"Needs Review",["May need updating","Storage noted"]],[cts.filter(c=>c==="action").length,C.red,"Action Needed",["Guardianship not formalised"]]].map(([n,c,lbl,items])=><div key={lbl} style={{background:C.sage2,borderRadius:10,padding:14,border:`1px solid ${C.light}`}}><div style={{fontSize:30,fontWeight:300,color:c,fontFamily:sf,marginBottom:4}}>{n}</div><div style={{fontSize:11,fontWeight:700,color:C.dark,marginBottom:8,letterSpacing:.6,textTransform:"uppercase",fontFamily:ss}}>{lbl}</div>{items.map((t,i)=><div key={i} style={{display:"flex",gap:5,fontSize:12,color:C.grey,marginBottom:3,fontFamily:ss}}><span style={{color:c,flexShrink:0,fontWeight:700}}>→</span>{t}</div>)}</div>)}</div><div style={{borderTop:`1px solid ${C.light}`,paddingTop:18}}><div style={{fontSize:11,fontWeight:700,color:C.dark,marginBottom:10,letterSpacing:.8,textTransform:"uppercase",fontFamily:ss}}>Next steps</div>{["Book a solicitor session to formalise guardianship","Ensure your partner knows where documents are kept","Store a copy of your will in Tribu"].map((t,i)=><div key={i} style={{display:"flex",gap:7,fontSize:13,color:C.dark,marginBottom:8,alignItems:"flex-start",fontFamily:ss}}><span style={{color:C.deepSage,flexShrink:0,fontWeight:700}}>→</span>{t}</div>)}<button onClick={()=>setShowStore(true)} style={{marginTop:14,padding:"12px 26px",background:C.deepSage,color:"#fff",border:"none",borderRadius:9,fontSize:13,cursor:"pointer",fontWeight:700,fontFamily:ss}}>Store your will in Tribu</button><div style={{marginTop:16,paddingTop:14,borderTop:`1px solid ${C.light}`}}><div style={{fontSize:12,color:C.grey,fontFamily:ss,lineHeight:1.65,marginBottom:6}}>Not sure what you need? MoneySmart has free, independent guidance on wills, powers of attorney and estate planning.</div><a href="https://moneysmart.gov.au/wills-and-estate-planning" target="_blank" rel="noopener noreferrer" style={{fontSize:12,color:C.deepSage,fontWeight:700,fontFamily:ss,textDecoration:"none"}}>Visit MoneySmart → moneysmart.gov.au</a></div></div></div></div>;}
  return<div style={{maxWidth:530,margin:"0 auto",padding:"28px 0"}}><div style={{display:"flex",alignItems:"center",gap:9,marginBottom:18}}><span style={{fontSize:12,color:C.grey,flexShrink:0,fontWeight:600,fontFamily:ss}}>Step {step+1} of {WQ.length}</span><div style={{height:3,flex:1,background:C.light,borderRadius:2}}><div style={{height:3,width:`${((step+1)/WQ.length)*100}%`,background:C.terra,borderRadius:2,transition:"width .4s"}}/></div></div>
    <div style={{display:"flex",gap:10,marginBottom:12,alignItems:"flex-start"}}><Logo s={38}/><div style={{background:C.white,borderRadius:"4px 12px 12px 12px",padding:16,border:`1px solid ${C.light}`,flex:1,boxShadow:"0 1px 6px rgba(83,95,105,.06)"}}><p style={{fontSize:15,color:C.dark,lineHeight:1.65,margin:0,fontFamily:ss,fontWeight:400}}>{q.q}</p></div></div>
    <div style={{display:"flex",flexDirection:"column",gap:7,marginLeft:48}}>{q.o.map((o,i)=><button key={i} onClick={()=>{setSel(i);setResp(true);}} style={{padding:"11px 14px",fontSize:13,background:sel===i?C.deepSage:C.white,color:sel===i?"#fff":C.dark,border:`1px solid ${sel===i?C.deepSage:C.light}`,borderRadius:8,cursor:"pointer",textAlign:"left",fontWeight:sel===i?600:500,fontFamily:ss,transition:"all .15s"}}>{o}</button>)}</div>
    {resp&&sel!==null&&<><div style={{display:"flex",gap:10,marginTop:14,alignItems:"flex-start"}}><Logo s={38}/><div style={{background:C.sage2,borderRadius:"4px 12px 12px 12px",padding:13,flex:1,border:`1px solid ${C.light}`}}><p style={{fontSize:13,margin:0,lineHeight:1.65,color:C.dark,fontFamily:ss}}>{q.r[sel]}</p>{q.rl&&q.rl[sel]?<a href="https://moneysmart.gov.au" target="_blank" rel="noopener noreferrer" style={{display:"inline-block",marginTop:8,padding:"6px 13px",background:C.deepSage,color:"#fff",borderRadius:7,fontSize:12,textDecoration:"none",fontWeight:600,fontFamily:ss}}>Visit MoneySmart</a>:null}</div></div>
      {q.exec&&!execN&&card(<><div style={{fontSize:12,color:C.dark,marginBottom:7,fontWeight:600,fontFamily:ss}}>How many executors?</div><div style={{display:"flex",gap:6}}>{["One","Two","Other"].map((n,i)=><button key={i} onClick={()=>setExN(i+1)} style={{flex:1,padding:"8px",fontSize:13,background:C.white,border:`1px solid ${C.light}`,borderRadius:7,cursor:"pointer",color:C.dark,fontWeight:500,fontFamily:ss}}>{n}</button>)}</div></>)}
      {q.exec&&execN&&card(<>{(execN>=2?["Executor 1 name","Executor 1 relationship","Executor 2 name","Executor 2 relationship"]:["Executor name","Relationship"]).map((fl,i)=><Fld key={i} lbl={fl}/>)}{inform(inf,setInf)}</>)}
      {q.loc&&sel===1&&card(<Fld lbl="Where is it kept?" ph="e.g. Filing cabinet in study"/>)}
      {q.gdn&&sel===0&&card(<><Fld lbl="Guardian name"/><Fld lbl="Relationship"/>{inform(inf,setInf)}</>)}
      <div style={{display:"flex",gap:7,marginTop:13,marginLeft:48}}><button onClick={back} style={{padding:"8px 18px",fontSize:13,background:C.white,border:`1px solid ${C.light}`,borderRadius:8,cursor:"pointer",color:C.dark,fontWeight:600,fontFamily:ss}}>Back</button><button onClick={next} style={{padding:"8px 22px",fontSize:13,background:C.terra,color:"#fff",border:"none",borderRadius:8,cursor:"pointer",fontWeight:700,fontFamily:ss}}>{step>=WQ.length-1?"Complete":"Continue"}</button></div></>}
  </div>;
}

function UploadDocModal({onClose}){
  const[phase,setPhase]=useState("idle");
  const[drag,setDrag]=useState(false);
  const[fileName,setFileName]=useState(null);
  const[confirmed,setConfirmed]=useState(false);
  const OV={position:"fixed",top:0,left:0,right:0,bottom:0,background:"rgba(83,95,105,.5)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:2000};
  const sim={type:"Car Insurance Policy",provider:"GIO",vehicle:"Simone's Toyota Corolla",prem:"$1,240/yr",exp:"10 May 2027",conf:94};
  if(confirmed)return(
    <div style={OV}>
      <div style={{background:C.white,borderRadius:16,padding:28,maxWidth:380,width:"90%",textAlign:"center",boxShadow:"0 24px 60px rgba(0,0,0,.18)"}}>
        <div style={{width:48,height:48,borderRadius:"50%",background:`${C.green}15`,display:"flex",alignItems:"center",justifyContent:"center",margin:"0 auto 14px"}}><Ic d={P.chk} z={22} c={C.green} w={2.5}/></div>
        <h2 style={{fontFamily:sf,fontSize:19,fontWeight:400,color:C.dark,marginBottom:6}}>Document stored.</h2>
        <p style={{fontSize:13,color:C.grey,fontFamily:ss,lineHeight:1.65,marginBottom:18}}>GIO Car Insurance added to <strong>Insurance → Vehicles</strong>. A renewal reminder has been set for 10 May 2027.</p>
        <button onClick={onClose} style={{padding:"10px 26px",background:C.deepSage,color:"#fff",border:"none",borderRadius:9,fontSize:13,cursor:"pointer",fontWeight:700,fontFamily:ss}}>Done</button>
      </div>
    </div>
  );
  if(phase==="review")return(
    <div style={OV}>
      <div style={{background:C.white,borderRadius:16,padding:24,maxWidth:440,width:"90%",boxShadow:"0 24px 60px rgba(0,0,0,.18)"}}>
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:18}}>
          <h3 style={{fontFamily:sf,fontSize:19,fontWeight:400,color:C.dark,margin:0}}>Review detected document</h3>
          <button onClick={onClose} style={{background:"none",border:"none",fontSize:21,cursor:"pointer",color:C.grey}}>×</button>
        </div>
        <div style={{background:`${C.deepSage}0d`,borderRadius:9,padding:12,marginBottom:14,border:`1px solid ${C.deepSage}22`,display:"flex",justifyContent:"space-between",alignItems:"center"}}>
          <div>
            <div style={{fontSize:12,fontWeight:700,color:C.deepSage,fontFamily:ss}}>Detected: {sim.type}</div>
            <div style={{fontSize:11,color:C.grey,fontFamily:ss}}>Tribu has read and classified this document</div>
          </div>
          <div style={{textAlign:"right",marginLeft:8}}>
            <div style={{fontSize:18,fontWeight:300,color:C.deepSage,fontFamily:sf}}>{sim.conf}%</div>
            <div style={{fontSize:9,color:C.grey,fontFamily:ss}}>confidence</div>
          </div>
        </div>
        <SectionLbl ch="Extracted details"/>
        {[["Provider",sim.provider],["Vehicle",sim.vehicle],["Premium",sim.prem],["Expires",sim.exp]].map(([l,v])=><DetailRow key={l} l={l} v={v}/>)}
        <div style={{background:"#fdf8f3",borderRadius:8,padding:10,marginBottom:14,border:`1px solid ${C.terra}22`}}>
          <div style={{fontSize:11,fontWeight:700,color:C.terra,fontFamily:ss,marginBottom:4}}>IF CONFIRMED, TRIBU WILL</div>
          {["Add this policy to Insurance → Vehicles","Set a renewal reminder for 10 May 2027","Archive any existing GIO vehicle policy"].map((t,i)=>(
            <div key={i} style={{fontSize:12,color:C.dark,fontFamily:ss,display:"flex",gap:5,marginBottom:3}}>
              <span style={{color:C.terra}}>→</span>{t}
            </div>
          ))}
        </div>
        <div style={{display:"flex",gap:7}}>
          <button onClick={()=>setConfirmed(true)} style={{flex:1,padding:"10px",background:C.terra,color:"#fff",border:"none",borderRadius:8,fontSize:13,cursor:"pointer",fontWeight:700,fontFamily:ss}}>Yes, this is correct</button>
          <button onClick={onClose} style={{padding:"10px 14px",background:C.white,color:C.dark,border:`1px solid ${C.light}`,borderRadius:8,fontSize:12,cursor:"pointer",fontFamily:ss}}>Not right</button>
        </div>
      </div>
    </div>
  );
  return(
    <div style={OV}>
      <div style={{background:C.white,borderRadius:16,padding:24,maxWidth:420,width:"90%",boxShadow:"0 24px 60px rgba(0,0,0,.18)"}}>
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:18}}>
          <h3 style={{fontFamily:sf,fontSize:19,fontWeight:400,color:C.dark,margin:0}}>Upload a document</h3>
          <button onClick={onClose} style={{background:"none",border:"none",fontSize:21,cursor:"pointer",color:C.grey}}>×</button>
        </div>
        <div onMouseEnter={()=>setDrag(true)} onMouseLeave={()=>setDrag(false)} style={{border:`2px dashed ${drag?C.deepSage:C.light}`,borderRadius:12,padding:"32px 20px",textAlign:"center",cursor:"pointer",marginBottom:16,background:drag?C.sage2:"transparent",transition:"all .2s"}} onClick={()=>{setFileName("GIO_Car_Insurance_2027.pdf");setTimeout(()=>setPhase("review"),600);}}>
          <Ic d={P.up} z={32} c={drag?C.deepSage:C.grey} w={1.5}/>
          <div style={{fontSize:14,color:C.dark,marginTop:12,marginBottom:4,fontWeight:600,fontFamily:ss}}>{fileName||"Click to upload or drag here"}</div>
          <div style={{fontSize:12,color:C.grey,fontFamily:ss}}>PDF, JPG, PNG — up to 20MB</div>
        </div>
        <div style={{display:"flex",alignItems:"center",gap:10,marginBottom:16}}>
          <div style={{flex:1,height:1,background:C.light}}/>
          <span style={{fontSize:12,color:C.grey,fontFamily:ss}}>or send to your Tribu email</span>
          <div style={{flex:1,height:1,background:C.light}}/>
        </div>
        <div style={{background:C.sage2,borderRadius:9,padding:"11px 14px",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
          <span style={{fontSize:13,color:C.dark,fontFamily:ss}}>simone@tribuvault.com.au</span>
          <button style={{fontSize:11,padding:"5px 11px",background:C.deepSage,color:"#fff",border:"none",borderRadius:6,cursor:"pointer",fontWeight:700,fontFamily:ss}}>Copy</button>
        </div>
      </div>
    </div>
  );
}

function EmailNotif({onClose}){
  const[ok,setOk]=useState(false);const d=ND;
  const cmp=[["Policy",d.old.no,d.neu.no],["Expires",d.old.exp,d.neu.exp],["Premium",d.old.prem,d.neu.prem],["Building cover",d.old.build,d.neu.build],["Contents cover",d.old.cont,d.neu.cont],["Excess",d.old.excess,d.neu.excess]];
  const OV={position:"fixed",top:0,left:0,right:0,bottom:0,background:"rgba(83,95,105,.45)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:2000};
  if(ok)return<div style={OV}><div style={{background:C.white,borderRadius:16,padding:26,maxWidth:380,width:"90%",textAlign:"center",boxShadow:"0 24px 60px rgba(0,0,0,.18)"}}><div style={{width:46,height:46,borderRadius:"50%",background:`${C.green}15`,display:"flex",alignItems:"center",justifyContent:"center",margin:"0 auto 12px"}}><Ic d={P.chk} z={20} c={C.green} w={2.5}/></div><h2 style={{fontFamily:sf,fontSize:18,fontWeight:400,marginBottom:5,color:C.dark}}>House & Contents policy updated.</h2><p style={{fontSize:13,color:C.grey,lineHeight:1.65,marginBottom:14,fontFamily:ss}}>Policy HCI-2847392 archived. Vault now reflects HCI-2847393 until 12 Aug 2026.</p><div style={{background:C.sage2,borderRadius:9,padding:12,marginBottom:14,textAlign:"left"}}><SectionLbl ch="Awaiting acknowledgement"/><div style={{display:"flex",alignItems:"center",gap:7}}><div style={{width:28,height:28,borderRadius:"50%",background:C.grey,display:"flex",alignItems:"center",justifyContent:"center",fontSize:10,fontWeight:700,color:"#fff",flexShrink:0,fontFamily:ss}}>JJ</div><div style={{flex:1,fontSize:12,fontWeight:600,color:C.dark,fontFamily:ss}}>Waiting for Josh to confirm.</div><Pill t="Pending" c={C.terra}/></div></div><button onClick={onClose} style={{padding:"9px 22px",background:C.deepSage,color:"#fff",border:"none",borderRadius:8,fontSize:13,cursor:"pointer",fontWeight:700,fontFamily:ss}}>Done</button></div></div>;
  return<div style={OV}><div style={{background:C.white,borderRadius:16,width:"90%",maxWidth:460,maxHeight:"90vh",overflow:"auto",boxShadow:"0 24px 60px rgba(0,0,0,.18)"}}><div style={{background:C.sage2,borderRadius:"16px 16px 0 0",padding:"12px 16px",borderBottom:`1px solid ${C.light}`,display:"flex",justifyContent:"space-between",alignItems:"center"}}><div style={{display:"flex",alignItems:"center",gap:8}}><div style={{width:28,height:28,borderRadius:"50%",background:C.white,border:`1px solid ${C.light}`,display:"flex",alignItems:"center",justifyContent:"center"}}><Ic d={P.pdf} z={13} c={C.terra} w={1.5}/></div><div><div style={{fontSize:10,letterSpacing:1,textTransform:"uppercase",color:C.terra,fontWeight:700,fontFamily:ss}}>Document Review</div><div style={{fontSize:13,fontWeight:700,color:C.dark,fontFamily:ss}}>Received via Tribu email</div></div></div><button onClick={onClose} style={{background:"none",border:"none",fontSize:19,cursor:"pointer",color:C.grey}}>×</button></div>
    <div style={{padding:16}}><div style={{background:C.sage2,borderRadius:8,padding:11,marginBottom:12}}><SectionLbl ch="Email received"/>{[["From",d.from],["To",d.to],["Subject",d.sub],["Received",d.rx]].map(([l,v])=><div key={l} style={{display:"flex",gap:5,fontSize:11,marginBottom:3,color:C.dark,fontFamily:ss}}><span style={{width:50,flexShrink:0,fontWeight:700,color:C.grey}}>{l}</span><span style={{wordBreak:"break-all"}}>{v}</span></div>)}</div>
      <div style={{background:`${C.deepSage}0d`,borderRadius:8,padding:10,marginBottom:12,border:`1px solid ${C.deepSage}22`,display:"flex",justifyContent:"space-between",alignItems:"center"}}><div><div style={{fontSize:12,fontWeight:700,color:C.deepSage,fontFamily:ss}}>Classified: Home & Contents Renewal</div><div style={{fontSize:11,color:C.grey,fontFamily:ss}}>Appears to supersede an existing policy.</div></div><div style={{textAlign:"right",marginLeft:8,flexShrink:0}}><div style={{fontSize:18,fontWeight:300,color:C.deepSage,fontFamily:sf}}>97%</div><div style={{fontSize:9,color:C.grey,fontFamily:ss}}>confidence</div></div></div>
      <SectionLbl ch="Policy comparison"/><div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:7,marginBottom:12}}><div style={{background:C.sage2,borderRadius:8,padding:10}}><div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:7}}><span style={{fontSize:11,fontWeight:700,color:C.dark,fontFamily:ss}}>Existing</span><Pill t="Archive" c={C.red}/></div>{cmp.map(([l,v])=><div key={l} style={{display:"flex",justifyContent:"space-between",fontSize:11,marginBottom:3,color:C.dark,fontFamily:ss}}><span style={{color:C.grey}}>{l}</span><span style={{textDecoration:"line-through",color:C.grey}}>{v}</span></div>)}</div><div style={{background:C.white,borderRadius:8,padding:10,border:`2px solid ${C.deepSage}33`}}><div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:7}}><span style={{fontSize:11,fontWeight:700,color:C.deepSage,fontFamily:ss}}>New policy</span><Pill t="Renewal" c={C.green}/></div>{cmp.map(([l,ov,nv])=><div key={l} style={{display:"flex",justifyContent:"space-between",fontSize:11,marginBottom:3,color:C.dark,fontFamily:ss}}><span style={{color:C.grey}}>{l}</span><span style={{color:nv!==ov?C.green:C.dark,fontWeight:nv!==ov?700:400}}>{nv}</span></div>)}</div></div>
      <div style={{background:"#fdf8f3",borderRadius:7,padding:10,marginBottom:12,border:`1px solid ${C.terra}22`}}><div style={{fontSize:11,fontWeight:700,color:C.terra,marginBottom:5,letterSpacing:.5,fontFamily:ss}}>CONFIRMING WILL</div>{["Archive policy HCI-2847392","Replace with HCI-2847393","Notify Josh to acknowledge"].map((t,i)=><div key={i} style={{display:"flex",gap:5,fontSize:12,color:C.dark,marginBottom:3,fontFamily:ss}}><span style={{color:C.terra}}>→</span>{t}</div>)}</div>
      <div style={{display:"flex",gap:7}}><button onClick={()=>setOk(true)} style={{flex:1,padding:"10px",background:C.terra,color:"#fff",border:"none",borderRadius:8,fontSize:13,cursor:"pointer",fontWeight:700,fontFamily:ss}}>Confirm this is correct</button><button onClick={onClose} style={{padding:"10px 14px",background:C.white,color:C.dark,border:`1px solid ${C.light}`,borderRadius:8,fontSize:12,cursor:"pointer",fontWeight:600,fontFamily:ss}}>Not right — discuss</button></div>
    </div></div></div>;
}

function Grace({show,onClose}){
  const[msgs,setMsgs]=useState([]);const[input,setInput]=useState("");const[typing,setT]=useState(false);const ref=useRef(null);
  useEffect(()=>{ref.current?.scrollIntoView({behavior:"smooth"});},[msgs]);
  const send=()=>{if(!input.trim())return;const u=input;setInput("");setMsgs(p=>[...p,{r:"u",t:u}]);setT(true);const low=u.toLowerCase();const m=CH.find(c=>low.includes(c.k));setTimeout(()=>{setT(false);setMsgs(p=>[...p,{r:"a",t:m?m.a:"I don't have that information in your vault yet. Try adding the relevant document and I can help from there.",link:m?.link,linkLbl:m?.linkLbl}]);},1100);};
  if(!show)return null;
  return<div style={{position:"fixed",right:18,bottom:18,width:316,height:440,background:C.white,borderRadius:16,boxShadow:"0 16px 48px rgba(83,95,105,.2)",display:"flex",flexDirection:"column",overflow:"hidden",zIndex:1000,border:`1px solid ${C.light}`}}>
    <div style={{background:`linear-gradient(135deg,${C.deepSage} 0%,#3d5560 100%)`,padding:"13px 15px",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
      <div style={{display:"flex",alignItems:"center",gap:10}}><div style={{width:44,height:44,borderRadius:10,overflow:"hidden",flexShrink:0}}><img src="https://i.postimg.cc/1z1RTyPf/u6134473723-Laptop-in-centre-surrounded-by-four-elegant-icons-5aab5148-733a-4ded-9b77-19b12a2f87bf-3.png" style={{width:"100%",height:"100%",objectFit:"cover"}} alt="Navigator"/></div><div><div style={{color:"#fff",fontFamily:sf,fontSize:15,fontWeight:400}}>Tribu Navigator</div><div style={{color:"rgba(255,255,255,.6)",fontSize:11,fontFamily:ss}}>Ask me anything about your vault</div></div></div>
      <div style={{display:"flex",gap:5}}><button onClick={()=>setMsgs([])} style={{background:"rgba(255,255,255,.12)",border:"1px solid rgba(255,255,255,.2)",color:"#fff",fontSize:10,padding:"3px 8px",borderRadius:5,cursor:"pointer",fontFamily:ss}}>Clear</button><button onClick={onClose} style={{background:"none",border:"none",color:"rgba(255,255,255,.7)",fontSize:19,cursor:"pointer",lineHeight:1}}>×</button></div>
    </div>
    <div style={{flex:1,overflowY:"auto",padding:11}}>{msgs.length===0&&<div style={{padding:"8px 0"}}><p style={{marginBottom:9,fontSize:12,color:C.grey,textAlign:"center",fontFamily:ss}}>Ask me anything about your family's vault.</p>{["Simone's car insurance renewal date?","Do we have roadside assistance?","Replacement value of our home?"].map((s,i)=><button key={i} onClick={()=>setInput(s)} style={{display:"block",width:"100%",padding:"8px 10px",fontSize:12,background:C.sage2,border:"none",borderRadius:7,cursor:"pointer",textAlign:"left",color:C.dark,marginBottom:5,fontWeight:500,fontFamily:ss}}>{s}</button>)}</div>}{msgs.map((m,i)=><div key={i} style={{display:"flex",justifyContent:m.r==="u"?"flex-end":"flex-start",marginBottom:7}}><div style={{maxWidth:"82%",padding:"8px 11px",borderRadius:m.r==="u"?"11px 11px 3px 11px":"3px 11px 11px 11px",background:m.r==="u"?C.deepSage:C.sage2,color:m.r==="u"?"#fff":C.dark,fontSize:13,lineHeight:1.5,fontFamily:ss,textAlign:m.r==="u"?"right":"left"}}>{m.t}{m.link&&<div style={{marginTop:7,paddingTop:6,borderTop:"1px solid rgba(124,151,145,.3)"}}><span onClick={()=>{onClose&&onClose();}} style={{fontSize:11,color:C.deepSage,fontWeight:700,cursor:"pointer",fontFamily:ss}}>→ {m.linkLbl||"View in vault"}</span></div>}</div></div>)}{typing&&<div style={{fontSize:12,color:C.grey,padding:"4px 2px",fontStyle:"italic",fontFamily:ss}}>Tribu is thinking…</div>}<div ref={ref}/></div>
    <div style={{padding:"8px 10px",borderTop:`1px solid ${C.light}`,display:"flex",gap:6,background:C.white}}><input value={input} onChange={e=>setInput(e.target.value)} onKeyDown={e=>e.key==="Enter"&&send()} placeholder="Ask me anything…" style={{flex:1,padding:"8px 12px",border:`1px solid ${C.light}`,borderRadius:18,fontSize:13,outline:"none",color:C.dark,background:C.sage2,fontFamily:ss}}/><button onClick={send} style={{width:32,height:32,borderRadius:"50%",background:C.terra,border:"none",color:"#fff",cursor:"pointer",fontSize:13,flexShrink:0}}>↑</button></div>
  </div>;
}

function DashCard({icon,iconBg,title,sub,btn,onBtn,onClick,badge,accent,leftAccent}){
  const[hov,setHov]=useState(false);
  const bc=accent||C.deepSage;
  return<div onClick={onClick} onMouseEnter={()=>setHov(true)} onMouseLeave={()=>setHov(false)} style={{background:leftAccent?"#fdf9f7":C.white,borderRadius:12,padding:"14px 18px",border:`1px solid ${hov&&onClick?bc:leftAccent?`${C.terra}33`:C.light}`,borderLeft:leftAccent?`3px solid ${C.terra}`:`1px solid ${hov&&onClick?bc:C.light}`,display:"flex",alignItems:"center",gap:14,marginBottom:10,boxShadow:hov?"0 4px 18px rgba(83,95,105,.1)":"0 1px 4px rgba(83,95,105,.04)",transition:"all .15s",cursor:onClick?"pointer":"default"}}>
    <div style={{width:42,height:42,borderRadius:10,background:iconBg||C.sage2,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0}}>{icon}</div>
    <div style={{flex:1,minWidth:0}}>
      <div style={{fontSize:14,fontWeight:700,color:C.dark,fontFamily:ss,marginBottom:2,lineHeight:1.3}}>{title}</div>
      <div style={{fontSize:12,color:C.grey,fontFamily:ss,lineHeight:1.4}}>{sub}</div>
    </div>
    {badge&&<div style={{flexShrink:0,marginLeft:8}}>{badge}</div>}
    {btn&&<button onClick={e=>{e.stopPropagation();onBtn&&onBtn();}} style={{flexShrink:0,marginLeft:8,padding:"8px 18px",background:C.deepSage,border:"none",borderRadius:8,fontSize:13,cursor:"pointer",color:"#fff",fontWeight:700,fontFamily:ss,whiteSpace:"nowrap"}}>{btn}</button>}
    {!btn&&onClick&&!badge&&<span style={{fontSize:14,color:bc,flexShrink:0,marginLeft:4}}>→</span>}
  </div>;
}

function Dashboard({nav,showNotif,showUpload}){
  const r=46,ci=2*Math.PI*r,off=ci-0.816*ci;
  return<div style={{minHeight:"100vh",background:C.white}}>
    <div style={{borderBottom:`1px solid ${C.light}`,padding:"20px 32px 18px",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
      <div><h1 style={{fontFamily:sf,fontSize:28,fontWeight:400,color:C.dark,margin:0}}>Welcome, Simone</h1><div style={{fontSize:12,color:C.grey,marginTop:3,fontFamily:ss}}>Tuesday, 10 March 2026</div><div style={{fontSize:12,color:C.deepSage,fontWeight:600,marginTop:1,fontFamily:ss}}>14 documents stored</div></div>
      <div style={{display:"flex",alignItems:"center",gap:10}}><span style={{fontSize:11,color:C.terra,fontWeight:700,letterSpacing:.6,fontFamily:ss}}>● VAULT SECURED</span><div style={{width:36,height:36,borderRadius:"50%",background:C.sage2,border:`2px solid ${C.terra}44`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:12,fontWeight:700,color:C.terra,fontFamily:ss}}>SJ</div></div>
    </div>
    <div style={{padding:"24px 32px"}}>
      <h2 style={{fontFamily:sf,fontSize:32,fontWeight:400,color:C.dark,margin:"0 0 22px"}}>Overview</h2>
      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:14,marginBottom:22}}>
        <div style={{background:C.white,borderRadius:14,padding:20,border:`1px solid ${C.light}`,boxShadow:"0 2px 12px rgba(83,95,105,.06)",display:"flex",flexDirection:"column"}}>
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:10}}><SectionLbl ch="Vault Health Score"/><span style={{fontSize:10,color:C.grey,fontFamily:ss}}>Updated today</span></div>
          <div style={{display:"flex",gap:14,alignItems:"center",flex:1}}>
            <div style={{position:"relative",width:108,height:108,flexShrink:0}}><svg width="108" height="108"><circle cx="54" cy="54" r={r} fill="none" stroke={C.light} strokeWidth="7"/><circle cx="54" cy="54" r={r} fill="none" stroke={C.terra} strokeWidth="7" strokeDasharray={ci} strokeDashoffset={off} strokeLinecap="round" transform="rotate(-90 54 54)"/></svg><div style={{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%,-50%)",textAlign:"center"}}><div style={{fontSize:28,fontWeight:300,fontFamily:sf,color:C.dark}}>81<span style={{fontSize:12}}>%</span></div><div style={{fontSize:10,color:C.grey,letterSpacing:.4,fontFamily:ss}}>health</div></div></div>
            <div style={{flex:1}}>
              <div style={{display:"flex",alignItems:"center",gap:6,marginBottom:5}}><Ic d="M6.5 3.5a1.5 1.5 0 013 0V11m0-7.5a1.5 1.5 0 013 0V11m0-6a1.5 1.5 0 013 0V15a7 7 0 11-14 0V11a1.5 1.5 0 013 0" z={16} c={C.terra} w={1.5}/><span style={{fontSize:14,fontWeight:700,color:C.dark,fontFamily:ss}}>Good job!</span></div>
              <div style={{fontSize:12,color:C.grey,marginBottom:12,fontFamily:ss}}>Most families sit around 73%.</div>
              {[["Housing",80,C.terra],["Insurance",70,C.deepSage]].map(([l,pct,c])=><div key={l} style={{marginBottom:9}}><div style={{display:"flex",justifyContent:"space-between",fontSize:12,marginBottom:3,fontFamily:ss}}><span style={{color:C.dark}}>{l}</span><span style={{color:c,fontWeight:700}}>{pct}%</span></div><div style={{height:4,background:C.light,borderRadius:2}}><div style={{height:4,width:`${pct}%`,background:c,borderRadius:2,transition:"width .6s"}}/></div></div>)}
            </div>
          </div>
          <div style={{borderTop:`1px solid ${C.light}`,paddingTop:10,marginTop:10}}><button onClick={()=>nav("insurance")} style={{fontSize:12,color:C.deepSage,background:"none",border:"none",cursor:"pointer",padding:0,fontWeight:600,fontFamily:ss}}>How to improve your health score →</button></div>
        </div>
        <div style={{background:C.white,borderRadius:14,padding:20,border:`1px solid ${C.light}`,boxShadow:"0 2px 12px rgba(83,95,105,.06)",display:"flex",flexDirection:"column"}}>
          <SectionLbl ch="This year you've saved"/>
          <div style={{flex:1}}>{[["$231","Gas provider switch"],["$9,800","Mortgage rate improvement"],["$197","Car insurance switch"]].map(([a,desc],i,ar)=><div key={desc} style={{marginBottom:10,paddingBottom:10,borderBottom:i<ar.length-1?`1px solid ${C.light}`:"none",display:"flex",justifyContent:"space-between",alignItems:"center"}}><div style={{fontSize:12,color:C.grey,fontFamily:ss}}>{desc}</div><div style={{fontSize:18,fontWeight:600,fontFamily:sf,color:C.dark}}>{a}</div></div>)}</div>
          <div style={{borderTop:`1px solid ${C.light}`,paddingTop:10,marginTop:10}}><button onClick={()=>nav("housing")} style={{fontSize:12,color:C.deepSage,background:"none",border:"none",cursor:"pointer",padding:0,fontWeight:600,fontFamily:ss}}>Review your housing and utilities →</button></div>
        </div>
      </div>
      <div style={{marginBottom:22}}>
        <DashCard icon={<Ic d="M3 9.5L12 3l9 6.5V21H15v-5h-6v5H3V9.5z" z={20} c={C.terra} w={1.5}/>} iconBg="#fdf3ee" title="Start your Will-Readiness Check" sub="6 questions · 3 minutes · understand where you and your family stand" btn="Start now" onBtn={()=>nav("willcheck")} onClick={()=>nav("willcheck")} accent={C.terra} leftAccent={true}/>
        <DashCard icon={<Ic d={P.cal} z={20} c={C.deepSage} w={1.5}/>} title="Connect your calendar" sub="Enable renewal prompts and reminders directly in your calendar" btn="Connect" onBtn={()=>{}}/>
        <DashCard icon={<Ic d={P.pdf} z={20} c={C.terra} w={1.5}/>} iconBg="#fdf3ee" title="Simone sent a renewal to your Tribu email" sub="NRMA Home & Contents — tap to review and confirm" badge={<Pill t="Review required" c={C.deepSage}/>} onClick={showNotif} accent={C.terra}/>
        <DashCard icon={<Ic d={P.up} z={20} c={C.deepSage} w={1.5}/>} title="Upload a document" sub="Add a policy, will, or any household document — Tribu will classify it automatically" btn="Upload" onBtn={showUpload} onClick={showUpload}/>
      </div>
      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:12}}>
        <div style={{background:C.white,borderRadius:11,padding:14,border:`1px solid ${C.light}`,boxShadow:"0 1px 6px rgba(83,95,105,.04)"}}><SectionLbl ch="Upcoming Renewals"/>{RENEW.map((r2,i,ar)=><div key={i} onClick={()=>nav(r2.link)} style={{display:"flex",justifyContent:"space-between",marginBottom:7,paddingBottom:7,borderBottom:i<ar.length-1?`1px solid ${C.light}`:"none",cursor:"pointer",transition:"opacity .15s"}} onMouseEnter={e=>e.currentTarget.style.opacity=".7"} onMouseLeave={e=>e.currentTarget.style.opacity="1"}><span style={{color:C.dark,fontSize:12,paddingRight:4,fontFamily:ss}}>{r2.i}</span><span style={{color:r2.d<90?C.terra:C.dark,fontWeight:700,fontSize:12,flexShrink:0,fontFamily:ss}}>{r2.d}d</span></div>)}</div>
        <div style={{background:C.white,borderRadius:11,padding:14,border:`1px solid ${C.light}`,boxShadow:"0 1px 6px rgba(83,95,105,.04)"}}><SectionLbl ch="Gaps to Address"/>{GAPS.map((g,i)=><div key={i} onClick={()=>nav(g.link,g.cat?{cat:g.cat}:undefined)} style={{fontSize:12,marginBottom:7,display:"flex",gap:5,color:C.dark,cursor:"pointer",alignItems:"flex-start",transition:"opacity .15s",fontFamily:ss}} onMouseEnter={e=>e.currentTarget.style.opacity=".7"} onMouseLeave={e=>e.currentTarget.style.opacity="1"}><span style={{color:C.red,fontSize:9,marginTop:3,flexShrink:0}}>●</span><span style={{textDecoration:"underline",textDecorationColor:`${C.red}44`}}>{g.t}</span></div>)}</div>
        <div style={{background:C.white,borderRadius:11,padding:14,border:`1px solid ${C.light}`,boxShadow:"0 1px 6px rgba(83,95,105,.04)"}}><SectionLbl ch="Recent Activity"/>{ACT.map((a,i,ar)=><div key={i} onClick={()=>nav(a.link)} style={{fontSize:12,marginBottom:7,paddingBottom:7,borderBottom:i<ar.length-1?`1px solid ${C.light}`:"none",color:C.dark,cursor:"pointer",transition:"opacity .15s",fontFamily:ss}} onMouseEnter={e=>e.currentTarget.style.opacity=".7"} onMouseLeave={e=>e.currentTarget.style.opacity="1"}><div style={{marginBottom:2,textDecoration:"underline",textDecorationColor:`${C.deepSage}44`}}>{a.t}</div><div style={{color:C.grey,fontSize:11}}>{a.w}</div></div>)}</div>
      </div>
    </div>
  </div>;
}

export default function App(){
  const[view,setView]=useState("dashboard");
  const[ai,setAi]=useState(false);
  const[notif,setNotif]=useState(false);
  const[insTab,setInsTab]=useState("asset");
  const[upload,setUpload]=useState(false);
  const nav=(v,opts)=>{
    if(v==="insurance"&&opts?.cat){setInsTab(opts.cat);}
    setView(v);
  };
  return<div style={{display:"flex",minHeight:"100vh",background:C.white,fontFamily:ss,fontSize:13,color:C.dark}}>
    <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@300;400;500;600;700&display=swap" rel="stylesheet"/>
    <Sidebar cur={view} nav={nav}/>
    <div style={{flex:1,overflowY:"auto",display:"flex",flexDirection:"column"}}>
      {view==="dashboard"&&<Dashboard nav={nav} showNotif={()=>setNotif(true)} showUpload={()=>setUpload(true)}/>}
      {view==="housing"&&<Housing nav={nav}/>}
      {view==="insurance"&&<Insurance showNotif={()=>setNotif(true)} nav={nav} initCat={insTab}/>}
      {view==="willcheck"&&<div style={{background:C.white,minHeight:"100vh",padding:"0 32px"}}><div style={{paddingTop:18,paddingBottom:4}}><div onClick={()=>nav("dashboard")} style={{display:"inline-flex",alignItems:"center",gap:5,cursor:"pointer",color:C.deepSage,fontSize:13,fontWeight:600,fontFamily:ss}}><Ic d="M15 18l-6-6 6-6" z={16} c={C.deepSage} w={2}/>Back to Dashboard</div></div><WillCheck nav={nav}/></div>}
    </div>
    {notif&&<EmailNotif onClose={()=>setNotif(false)}/>}
    {upload&&<UploadDocModal onClose={()=>setUpload(false)}/>}
    <Grace show={ai} onClose={()=>setAi(false)}/>
    {!ai&&<button onClick={()=>setAi(true)} style={{position:"fixed",right:18,bottom:18,width:48,height:48,borderRadius:"50%",background:C.terra,border:"none",color:"#fff",fontSize:18,cursor:"pointer",boxShadow:`0 6px 22px ${C.terra}66`,zIndex:999,transition:"transform .15s"}} onMouseEnter={e=>e.currentTarget.style.transform="scale(1.08)"} onMouseLeave={e=>e.currentTarget.style.transform="scale(1)"}>✦</button>}
  </div>;
}
