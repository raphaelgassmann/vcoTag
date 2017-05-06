# vcoTag
VMware Orchestrator Tag Management

Here is a way to lookup for VMs in your environment who have a specified tag assigned.
Create actions with following specs:
<table>
  <tr>
  <td><b>getVmsByTag</b></td>
  </tr>
  <tr>
    <td>Return type:</td>
    <td>Array/VC:VirtualMachine</td>
  </tr>
  <tr>
    <td>Parameter</td>
    <td>endpoint:VPAPIEndpoint</td>
  </tr>
  <tr>
    <td></td>
    <td>tagName:string</td>
  </tr>

  <tr>
  <td><b>getTagsOfCategory</b></td>
  </tr>
  <tr>
    <td>Return type:</td>
    <td>Array/string</td>
  </tr>
  <tr>
    <td>Parameter</td>
    <td>endpoint:VPAPIEndpoint</td>
  </tr>
  <tr>
    <td></td>
    <td>categoryName:string</td>
  </tr>

  <tr>
  <td><b>getTagIdByTagName</b></td>
  </tr>
  <tr>
    <td>Return type:</td>
    <td>tagId:string</td>
  </tr>
  <tr>
    <td>Parameter</td>
    <td>endpoint:VPAPIEndpoint</td>
  </tr>
  <tr>
    <td></td>
    <td>tagName:string</td>
  </tr>
</table>
