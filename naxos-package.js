(function(){
  'use strict';
  const script=document.currentScript;
  const params=new URL(script.src).searchParams;
  const courseId=params.get('course');
  const base=script.src.split('/').slice(0,-1).join('/');
  const load=src=>new Promise((resolve,reject)=>{const s=document.createElement('script');s.src=src;s.onload=resolve;s.onerror=reject;document.head.appendChild(s)});
  Promise.all([
    window.NAXOS4_COURSES ? Promise.resolve() : load(base+'/courses.js?v=22'),
    window.NAXOS4_PROMPTS ? Promise.resolve() : load(base+'/prompts.js?v=22')
  ]).then(()=>{
    const course=window.NAXOS4_COURSES.find(c=>c.id===courseId);
    if(!course) throw new Error('Course not found');
    const titles={
      'bricklayer-st0095':['Jointing Styles','Cavity Wall Setting Out','Cavity Wall Construction','Lintels and Soldiers','Sills and Cavity Closures','Insulation and Fire Stopping','Cavity Trays, DPCs and Weep Holes','Solid Walling and Capping','Brickwork Repair and Defects','Raking Cuts'],
      'architectural-joiner-st0264':['Basic Woodworking Joints','Timber Window Manufacture','First Fix Straight Staircases','First Fix Door Frames and Linings','Second Fix Timber Doors','Second Fix Wall and Floor Units','Timber Mouldings and Finishing','Staircase Spindles and Balustrades','Ironmongery','Fixed Machinery'],
      'site-carpenter-st0264':['Structural Carcassing','Partition Walls and Timber Sizing','Floor Joists and Coverings','Straight Flight Stairs','Service Encasements','Cladding','Wall and Floor Units','Handrails and Spindles','Internal and External Doors','Skirting and Architraves','Window Boards','Roof Carpentry']
    };
    const map=['A','B','C','D','E','F','G','H'];
    const packageData={schema:'naxos4-course-v1',source:'Naxos 22',course:{id:course.id,title:course.title,standard:course.standard,version:course.version,photoCount:course.photoCount,units:course.units.map((u,i)=>{const m={};map.forEach((k,j)=>m[k]=u[j+1]||'');return {index:i,id:course.id+'-unit-'+(i+1),title:titles[course.id]?.[i]||u[0],mapping:m,prompts:{A:window.NAXOS4_PROMPTS.photo(m.A,titles[course.id]?.[i]||u[0],'A'),B:window.NAXOS4_PROMPTS.statement(m.B),C:window.NAXOS4_PROMPTS.photo(m.C,titles[course.id]?.[i]||u[0],'C'),D:window.NAXOS4_PROMPTS.knowledge(m.D,titles[course.id]?.[i]||u[0]),E:window.NAXOS4_PROMPTS.photo(m.E,titles[course.id]?.[i]||u[0],'E'),F:window.NAXOS4_PROMPTS.knowledge(m.F,titles[course.id]?.[i]||u[0]),G:window.NAXOS4_PROMPTS.audio(m.G,titles[course.id]?.[i]||u[0]),H:window.NAXOS4_PROMPTS.reflection(m.H,titles[course.id]?.[i]||u[0])}})}};
    window.dispatchEvent(new CustomEvent('NAXOS4_COURSE_PACKAGE_READY',{detail:packageData}));
  }).catch(error=>window.dispatchEvent(new CustomEvent('NAXOS4_COURSE_PACKAGE_ERROR',{detail:{message:error.message||'Course package could not be loaded.'}})));
})();
