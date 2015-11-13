[{
    Name: "Garden Sprinkler System",
    Author: "Peter Guijt",
    Version: "2014-12-27",

	GroupName : '',
	IconImage : 'pages/control/widgets/Guytpetj/Sprinkler/Images/sprinkler1.png',
	StatusText : '',
	Description : '',
    UpdateTime : '',

    RenderView: function (cuid, module) {
		var container = $(cuid);
		var widget = container.find('[data-ui-field=widget]');
        //
        if (!this.Initialized)
        {
            this.Initialized = true;
            widget.find('[data-ui-field=armdisarm]').slider().slider('refresh');
            widget.find('[data-ui-field=armdisarm]').on('change', function()
            {
                HG.Control.Modules.ServiceCall('Control.' + ($(this).val() == 'on' ? 'On' : 'Off'), module.Domain, module.Address, '', function (data) { });
            });
			// settings button
			widget.find('[data-ui-field=settings]').on('click', function(){
			    HG.WebApp.ProgramEdit._CurrentProgram.Domain = module.Domain;
			    HG.WebApp.ProgramEdit._CurrentProgram.Address = module.Address;
			    HG.WebApp.ProgramsList.UpdateOptionsPopup();
			});			
        }
		//
		// read some context data
		//
		this.GroupName = container.attr('data-context-group');
		//
		// get module watts prop
		//


		var armedstatus = HG.WebApp.Utility.GetModulePropertyByName(module, "Status.Level"); //HG.WebApp.Utility.GetModulePropertyByName(module, "HomeGenie.SprinklerArmed");
		if (armedstatus != null && armedstatus.Value == "1")
		{
            widget.find('[data-ui-field=armdisarm]').val("on").slider('refresh');
		}
        else
        {
            widget.find('[data-ui-field=armdisarm]').val("off").slider('refresh');
        }
//
//
	var sprinkler1status = HG.WebApp.Utility.GetModulePropertyByName(module, "HomeGenie.SprinklerTriggered");
        if (sprinkler1status != null && sprinkler1status.Value == "standby")
        	{
       			this.StatusText = "Waiting on schedule";
        	}
	else if (sprinkler1status != null && sprinkler1status.Value == "group1")
        	{
       			this.StatusText = "Sprinkler Group 1 Active";
        	}
	else if (sprinkler1status != null && sprinkler1status.Value == "group2")
        	{
       			this.StatusText = "Sprinkler Group 2 Active";
        	}
	else if (sprinkler1status != null && sprinkler1status.Value == "group3")
        	{
       			this.StatusText = "Sprinkler Group 3 Active";
        	}
	else if (sprinkler1status != null && sprinkler1status.Value == "group4")
        	{
       			this.StatusText = "Sprinkler Group 4 Active";
        	}
	else if (sprinkler1status != null && sprinkler1status.Value == "group5")
        	{
       			this.StatusText = "Sprinkler Group 5 Active";
        	}
	else if (sprinkler1status != null && sprinkler1status.Value == "group6")
        	{
       			this.StatusText = "Sprinkler Group 6 Active";
        	}
	else if (sprinkler1status != null && sprinkler1status.Value == "switching")
        	{
       			this.StatusText = "Switching to next group";
		}
	else if (sprinkler1status != null && sprinkler1status.Value == "off")
        	{
       			this.StatusText = "Off";
        	}
        else
        	{
         		this.StatusText = "I'm Confused";
        	}
//
//		
	var sprinklerlevel = HG.WebApp.Utility.GetModulePropertyByName(module, "Status.Level");
	var sprinklerstatus = HG.WebApp.Utility.GetModulePropertyByName(module, "HomeGenie.SprinklerArmed");
	if (sprinklerlevel != null && sprinklerlevel.Value == "1")
		{
			this.Description = "Sprinkler System Activated";
		}	
	else
		{
			this.Description = "Switched Off";
		}
	//
	// render widget
	//
	widget.find('[data-ui-field=name]').html(module.Name);
	widget.find('[data-ui-field=icon]').attr('src', this.IconImage);
	widget.find('[data-ui-field=status]').html('<span style="vertical-align:middle">' + this.StatusText + '</span>');
	widget.find('[data-ui-field=description]').html(this.Description);
	}
}]
