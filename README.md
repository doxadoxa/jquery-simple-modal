jquery-simple-modal
===================
1. Create modal box and button which call it    
`<a href='#' id='modal-box-a' rel='modal-box'>Click</a>`   
`<div id='modal-box' style='display:none;'>`    
`<h2>Hello from modal box!</h2>`    
`</div>`   

2. Add in script block after jQuery and page initialization   
`$('#modal-box-a').modal()`

3. If you need use close button in modal use   
`$('#modal-box-a'.modal( {'close' : 'close-a' } );`   
where `close-a` id of close button.

4. You can use parameters to customize fading   
`bgColor` - fade background color, default #000
`opacity` - fade opacity level (0..1), default 0.8
`speed` - fade in and out speed, default normal
`fadeID` - fader background element id, default #fade
