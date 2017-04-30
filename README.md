# vcoTag
VMware Orchestrator Tag Management

Here is a way to lookup for VMs in your environment who have a specified tag assigned.
Create an action with following specs:
<table>
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
</table>
