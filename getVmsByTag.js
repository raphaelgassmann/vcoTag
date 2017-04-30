/**
 * @param endpoint:VAPIEndpoint
 * @param tagName:string
 * @retrun a array of VMs VC:VirtualMachine where specified tag is assigned
 * created by raphaelgassmann on 29.04.17
*/

var client = endpoint.client();
var tags = new com_vmware_cis_tagging_tag(client);
var arrTag = tags.list();
var arrVms = new Array();

//looking for tag
for each (tag in arrTag){
	var tagmod = tags.get(tag);
	if (tagmod.name == tagName){
		System.debug("Tag found: "+tagmod.name+" ID: "+ tagmod.id);
		//look up for tag association
		var tagassoc = new com_vmware_cis_tagging_tag__association(client) ;
		//resolve association id with vmid
		var tagassoclist = new com_vmware_vapi_std_dynamic__ID() ;
		tagassoclist = tagassoc.list_attached_objects(tagmod.id);
		for each (assoc in tagassoclist) {
			System.debug(assoc.id);
			//look for vc:virtualmachine and fill up in array
			var vms = Server.findAllForType("VC:VirtualMachine","xpath:id='"+assoc.id+"'");
			var vcVM = null;
			if (vms != null){
    			if (vms.length == 1){
			        System.debug("Match found for VM with this ID: "+assoc.id);
			        vcVM = vms[0];
					arrVms = arrVms.concat(vcVM);
					System.debug(vcVM.name);
			    }else{
			        System.debug("More than one VM found with this ID! "+assoc.id);
			        for each (vm in vms){
            			System.debug("VM ID: "+assoc.id);
        			}
    			}
			}
		}
	//no further lookup needed
	return arrVms;
	}
}
