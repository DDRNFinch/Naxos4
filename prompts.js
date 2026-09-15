window.NAXOS4_PROMPTS = {
  photo(criterion, unitTitle, stage) {
    const t = String(criterion || '').replace(/^[A-Z]\d+:\s*/, '').trim();
    const l = t.toLowerCase();
    if (l.includes('personal protective equipment (ppe)')) return 'Take a clear photo of yourself wearing the PPE required for this task.';
    if (l.includes('safety control equipment')) return 'Take a clear photo showing the safety controls you have put in place before starting work.';
    if (l.includes('respiratory protective equipment')) return 'Take a clear photo showing the required RPE being worn correctly.';
    if (l.includes('safe working area')) return 'Take a clear photo showing your work area prepared safely, with the required controls in place.';
    if (l.includes('drawings and specifications')) return 'Take a clear photo of the drawing or specification you used to carry out the work.';
    if (l.includes('hand tools')) return 'Take a clear photo showing the hand tools you selected and used for the task.';
    if (l.includes('power tools')) return 'Take a clear photo showing the power tools you selected and used safely for the task.';
    if (l.includes('materials')) return 'Take a clear photo showing the materials you selected and prepared for the task.';
    if (l.includes('laser levels')) return 'Take a clear photo showing the laser level set up and being used for the task.';
    if (l.includes('setting out')) return 'Take a clear photo showing your setting out before and during the work.';
    if (l.includes('marking out')) return 'Take a clear photo showing your marking out clearly before cutting or assembling the work.';
    if (l.includes('cutting list')) return 'Take a clear photo showing the cutting list and the timber or materials prepared from it.';
    if (l.includes('structural fixings')) return 'Take a clear photo showing the structural fixings installed correctly.';
    if (l.includes('jigs')) return 'Take a clear photo showing the jig you produced and how it is being used.';
    if (l.includes('ironmongery')) return 'Take a clear photo showing the ironmongery fitted correctly to the finished work.';
    if (l.includes('fixed machinery')) return 'Take a clear photo showing the fixed machinery prepared and ready for safe use.';
    if (l.includes('well-being support')) return 'Take a clear photo showing the support information or arrangements available to you or your team.';
    if (l.includes('environmental') || l.includes('environment and sustainability')) return 'Take a clear photo showing how you have separated, reused, recycled or safely disposed of materials.';
    if (l.includes('industry regulations')) return 'Take a clear photo showing the work completed in line with the required industry standards.';
    if (l.includes('team working')) return 'Take a clear photo showing you working effectively with the wider team.';
    if (l.includes('communication')) return 'Take a clear photo showing the work or information you communicated with others about.';
    if (l.includes('maintenance and sharpening')) return 'Take a clear photo showing the tools maintained or sharpened ready for use.';
    if (l.includes('maintain and store')) return 'Take a clear photo showing the equipment or tools stored safely after use.';
    if (l.includes('protect materials')) return 'Take a clear photo showing the materials or finished work protected from damage.';
    if (l.includes('repair')) return 'Take a clear photo clearly showing the repair you have carried out.';
    if (l.includes('construct')) return 'Take a clear photo clearly showing the completed work and the key details of the construction.';
    if (l.includes('produce')) return 'Take a clear photo clearly showing the completed item or detail you have produced.';
    if (l.includes('manufacture') || l.includes('assembly')) return 'Take a clear photo clearly showing the item you have manufactured or assembled.';
    if (l.includes('install')) return 'Take a clear photo clearly showing the item you have installed and how it is finished.';
    if (l.includes('fit ')) return 'Take a clear photo clearly showing the item you have fitted and the finished result.';
    return 'Take a clear photo showing the work you have completed for this part of the task.';
  },
  knowledge(criterion, unitTitle) {
    const l = String(criterion || '').replace(/^[A-Z]\d+:\s*/, '').toLowerCase();
    if (l.includes('ppe') || l.includes('safety control equipment')) return 'What safety controls and PPE would you use for this task, and why?';
    if (l.includes('rpe') || l.includes('local exhaust ventilation')) return 'What respiratory and dust controls would you use for this task, and how would you use them correctly?';
    if (l.includes('coshh') || l.includes('puwer') || l.includes('health and safety at work')) return 'What health and safety controls must be followed for this task, and how do they affect the way you work?';
    if (l.includes('fire safety')) return 'What fire safety controls are relevant to this task, and how would you use them correctly?';
    if (l.includes('confined spaces') || l.includes('working at height')) return 'What additional controls are needed for this type of work, and how would you work safely?';
    if (l.includes('situational awareness') || l.includes('slips, trips')) return 'What hazards would you look for before and during this task, and how would you control them?';
    if (l.includes('signage')) return 'What safety signs are relevant to this task, and what do they tell you?';
    if (l.includes('drawings and specifications')) return 'How would you use the drawing or specification to set out and complete this work accurately?';
    if (l.includes('resource estimation') || l.includes('quantity')) return 'How would you work out the quantities of materials and resources needed before starting this task?';
    if (l.includes('materials and their characteristics')) return 'Which materials are needed for this task, what are their key characteristics, and why are they suitable?';
    if (l.includes('timber sizing tables')) return 'How would you use a timber sizing table to select the correct timber for the job?';
    if (l.includes('hand tool')) return 'Which hand tools are appropriate for this task, and how should they be used, maintained and stored?';
    if (l.includes('power tool')) return 'Which power tools are appropriate for this task, and what are the safe-use and storage requirements?';
    if (l.includes('safe systems of work')) return 'What safe system of work would you follow for this task, and what checks would you make before starting?';
    if (l.includes('cutting')) return 'How would you choose and use the correct cutting method to achieve an accurate result?';
    if (l.includes('joints')) return 'What joint or connection method is suitable here, and how would you produce it accurately?';
    if (l.includes('connection methods')) return 'Which connection method would you choose for this work, and why is it suitable?';
    if (l.includes('setting out') || l.includes('marking out')) return 'How would you set out and mark out this work accurately, and what could happen if the measurements were wrong?';
    if (l.includes('stair')) return 'What key points must be considered when setting out and constructing this stair work?';
    if (l.includes('window')) return 'What key points must be considered when manufacturing and assembling this window work?';
    if (l.includes('door')) return 'What key points must be considered when manufacturing, fitting or finishing this door work?';
    if (l.includes('roof')) return 'What key points must be considered when installing this roof structure safely and accurately?';
    if (l.includes('moulding')) return 'How would you produce and finish this timber moulding accurately?';
    if (l.includes('ironmongery')) return 'How would you select and install the correct ironmongery for this work?';
    if (l.includes('finishing')) return 'What finishing method would you use and what checks would you make before considering the work complete?';
    if (l.includes('fire door')) return 'What requirements must be met when working with a fire door assembly?';
    if (l.includes('digital design') || l.includes('modelling')) return 'How could digital design or modelling information support this work?';
    if (l.includes('environment') || l.includes('sustainability') || l.includes('recycling')) return 'How would you reduce waste and environmental impact while carrying out this work?';
    if (l.includes('well-being')) return 'What wellbeing support is available, and how could you access or encourage it when needed?';
    if (l.includes('team working')) return 'How would you work effectively with others to achieve the required result?';
    if (l.includes('communication')) return 'What information would you need to communicate to others, and how would you communicate it clearly?';
    if (l.includes('regulations') || l.includes('standards')) return 'Which standards or regulations apply to this work, and how do they affect what you do?';
    if (l.includes('defects') || l.includes('repair')) return 'What defects could occur here, how would you identify them, and how would you repair them?';
    if (l.includes('bond types')) return 'Which bond would be appropriate for this work, and how would you set it out correctly?';
    if (l.includes('building') || l.includes('modern methods')) return 'What building principles or modern construction methods are relevant to this work?';
    if (l.includes('employment') || l.includes('small business') || l.includes('tax')) return 'What should you understand about employment, running a small business and tax in this industry?';
    return 'What do you need to know to carry out this part of the work correctly and safely?';
  },
  statement(criterion) {
    const l = String(criterion || '').replace(/^[A-Z]\d+:\s*/, '').toLowerCase();
    if (l.includes('ownership')) return 'Explain how you took responsibility for the work from start to finish and made sure it was completed to the required standard.';
    if (l.includes('health, safety') || l.includes('wellbeing')) return 'Explain how you put health, safety and wellbeing first while carrying out the work.';
    if (l.includes('environment')) return 'Explain how you considered the environment and used resources responsibly while carrying out the work.';
    if (l.includes('inclusive') || l.includes('diverse')) return 'Explain how you contributed to an inclusive and respectful working environment.';
    if (l.includes('learning and development')) return 'Explain what you learned from the work and how you identified opportunities to develop further.';
    if (l.includes('team-focus') || l.includes('team goals')) return 'Explain how you contributed to the team and helped achieve the wider build goal.';
    return 'Explain how you approached the work, took responsibility for your part and made sure the required result was achieved.';
  },
  audio(criterion) {
    const l = String(criterion || '').replace(/^[A-Z]\d+:\s*/, '').toLowerCase();
    if (l.includes('team working')) return 'Talk through how you worked with others on this task and what you did to help the team achieve the required result.';
    if (l.includes('environment') || l.includes('sustainability')) return 'Talk through how you considered waste, resources and the environment while carrying out this task.';
    if (l.includes('digital design') || l.includes('modelling')) return 'Talk through how digital information or modelling could support the work you have completed.';
    if (l.includes('well-being')) return 'Talk through how you would recognise wellbeing needs and access or provide appropriate support.';
    if (l.includes('fire door')) return 'Talk through the key requirements you would check when working with a fire door assembly.';
    if (l.includes('communication')) return 'Talk through how you communicated the information needed to complete this task effectively.';
    if (l.includes('materials')) return 'Talk through the materials involved in this task, including why they were suitable and how you handled them.';
    if (l.includes('power tool')) return 'Talk through the power tools relevant to this task, including their safe use and limitations.';
    if (l.includes('hand tool')) return 'Talk through the hand tools relevant to this task, including their use, care and storage.';
    if (l.includes('employment') || l.includes('small business')) return 'Talk through what you understand about employment or small-business responsibilities in the construction industry.';
    return 'Talk through the key knowledge you used while carrying out this task and explain how it supported your work.';
  },
  reflection(criterion) {
    const l = String(criterion || '').replace(/^[A-Z]\d+:\s*/, '').toLowerCase();
    if (l.includes('health, safety') || l.includes('wellbeing')) return 'Reflect on how you took responsibility for health, safety and wellbeing during this task.';
    if (l.includes('environment')) return 'Reflect on how you considered the environment and your use of resources during this task.';
    if (l.includes('inclusive') || l.includes('diverse')) return 'Reflect on how you contributed to an inclusive and respectful working environment.';
    if (l.includes('learning and development')) return 'Reflect on what you learned from this task and what you will develop further.';
    if (l.includes('team-focus') || l.includes('team goals')) return 'Reflect on how you contributed to the team and helped achieve the overall build goal.';
    if (l.includes('ownership')) return 'Reflect on how you took responsibility for completing the work to the required standard.';
    return 'Reflect on how you approached this task, what went well and what you would improve next time.';
  }
};
