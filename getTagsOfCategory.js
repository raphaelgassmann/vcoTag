/**
 * @param endpoint:VAPIEndpoint
 * @param categoryName:string
 * @return a array of Tags (string) who belonging to specified tag category
 * created by raphaelgassmann on 01.05.17
*/

var client = endpoint.client();
var categories = new com_vmware_cis_tagging_category(client) ;
var tags = new com_vmware_cis_tagging_tag(client);
var arrCat = categories.list();
var arrTag = tags.list();
var arrTags = new Array();

//looking for specified category
for each (cat in arrCat){
        var catmod = categories.get(cat);
        if (catmod.name == categoryName){
                System.debug("Category found: "+catmod.name);
                //looking for tags with category_id of specified input
                for each (tag in arrTag){
                        var tagmod = tags.get(tag);
                        if (catmod.id == tagmod.category_id){
                                System.debug("Tag found: "+tagmod.name);
                                arrTags.push(tagmod.name);
                        }
                }
                //no further lookup needed, sort and return result
                arrTags.sort();
                return arrTags;
        }
} 
