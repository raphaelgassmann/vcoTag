/**
 * @param endpoint:VAPIEndpoint
 * @param tagName:String
 * @retrun a string with Tag ID of specified input (tagName)
 * created by raphaelgassmann on 02.05.17
*/

var client = endpoint.client();
var tags = new com_vmware_cis_tagging_tag(client);
var arrTag = tags.list();

//looking for tag
for each (tag in arrTag){
	var tagmod = tags.get(tag);
	if (tagmod.name == tagName){
		System.debug("Tag ID for "+tagmod.name+" found: "+tagmod.id);
		//no further lookup needed
		return tagmod.id;
	}
}
