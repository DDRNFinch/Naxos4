(function(){
'use strict';
const script=document.currentScript;
const params=new URL(script.src).searchParams;
const courseId=params.get('course');
const base=script.src.split('/').slice(0,-1).join('/');
const load=src=>new Promise((resolve,reject)=>{const s=document.createElement('script');s.src=src;s.onload=resolve;s.onerror=reject;document.head.appendChild(s)});
Promise.all([
  window.NAXOS4_COURSES?Promise.resolve():load(base+'/courses.js?v=23'),
  window.NAXOS4_PROMPTS?Promise.resolve():load(base+'/prompts.js?v=23')
]).then(()=>{
  const course=window.NAXOS4_COURSES.find(c=>c.id===courseId);
  if(!course)throw new Error('Course not found');
  const titles={
    'bricklayer-st0095':['Jointing Styles','Cavity Wall Setting Out','Cavity Wall Construction','Lintels and Soldiers','Sills and Cavity Closures','Insulation and Fire Stopping','Cavity Trays, DPCs and Weep Holes','Solid Walling and Capping','Brickwork Repair and Defects','Raking Cuts'],
    'architectural-joiner-st0264':['Basic Woodworking Joints','Timber Window Manufacture','First Fix Straight Staircases','First Fix Door Frames and Linings','Second Fix Timber Doors','Second Fix Wall and Floor Units','Timber Mouldings and Finishing','Staircase Spindles and Balustrades','Ironmongery','Fixed Machinery'],
    'site-carpenter-st0264':['Structural Carcassing','Partition Walls and Timber Sizing','Floor Joists and Coverings','Straight Flight Stairs','Service Encasements','Cladding','Wall and Floor Units','Handrails and Spindles','Internal and External Doors','Skirting and Architraves','Window Boards','Roof Carpentry']
  };
  const keys=['A','B','C','D','E','F','G','H'];
  const units=course.units.map((u,i)=>{
    const title=titles[course.id]?.[i]||u[0];
    const mapping={};keys.forEach((key,j)=>mapping[key]=u[j+1]||'');
    return {index:i,id:course.id+'-unit-'+(i+1),title,mapping,prompts:{
      A:window.NAXOS4_PROMPTS.photo(mapping.A,title,'A'),
      B:window.NAXOS4_PROMPTS.statement(mapping.B),
      C:window.NAXOS4_PROMPTS.photo(mapping.C,title,'C'),
      D:window.NAXOS4_PROMPTS.knowledge(mapping.D,title),
      E:window.NAXOS4_PROMPTS.photo(mapping.E,title,'E'),
      F:window.NAXOS4_PROMPTS.knowledge(mapping.F,title),
      G:window.NAXOS4_PROMPTS.audio(mapping.G,title),
      H:window.NAXOS4_PROMPTS.reflection(mapping.H,title)
    }};
  });
  window.dispatchEvent(new CustomEvent('NAXOS4_COURSE_PACKAGE_READY',{detail:{schema:'naxos4-course-v1',source:'Naxos 23',course:{id:course.id,title:course.title,standard:course.standard,version:course.version,photoCount:course.photoCount,units}}}));
}).catch(error=>window.dispatchEvent(new CustomEvent('NAXOS4_COURSE_PACKAGE_ERROR',{detail:{message:error.message||'Course package could not be loaded.'}})));
})();
