initSidebarItems({"enum":[["OsPolicyComplianceState","Supported OSPolicy compliance states."],["TaskDirective","Specifies the current agent behavior."],["TaskType","Specifies the type of task to perform."]],"mod":[["agent_endpoint_service_client","Generated client implementations."],["apply_config_task",""],["apply_config_task_output",""],["apply_config_task_progress",""],["apply_patches_task_output",""],["apply_patches_task_progress",""],["apt_settings",""],["exec_step_config",""],["exec_step_task_output",""],["exec_step_task_progress",""],["inventory",""],["os_policy",""],["os_policy_resource_config_step",""],["patch_config",""],["report_task_complete_request",""],["report_task_progress_request",""],["task",""],["windows_update_settings",""]],"struct":[["ApplyConfigTask","Message which instructs OS Config agent to apply the desired state configuration."],["ApplyConfigTaskOutput","Information reported from the agent regarding the output of the task of applying desired state configuration."],["ApplyConfigTaskProgress","Information reported from the agent regarding the progress of the task of applying desired state configuration."],["ApplyPatchesTask","Message which instructs agent to apply patches."],["ApplyPatchesTaskOutput","Information reported from the agent about applying patches execution."],["ApplyPatchesTaskProgress","Information reported from the agent about applying patches execution."],["AptSettings","Apt patching will be performed by executing `apt-get update && apt-get upgrade`. Additional options can be set to control how this is executed."],["ExecStep","A step that runs an executable for a PatchJob."],["ExecStepConfig","Common configurations for an ExecStep."],["ExecStepTask","Message which instructs agent to execute the following command."],["ExecStepTaskOutput","Information reported from the agent about the exec step execution."],["ExecStepTaskProgress","Information reported from the agent about the exec step execution."],["GcsObject","GCS object representation."],["GooSettings","Googet patching is performed by running `googet update`."],["Inventory","The inventory details of a VM."],["OsPolicy","An OS policy defines the desired state configuration for an instance."],["OsPolicyResourceCompliance","Compliance data for an OS policy resource."],["OsPolicyResourceConfigStep","Step performed by the OS Config agent for configuring an `OSPolicyResource` to its desired state."],["PatchConfig","Patch configuration specifications. Contains details on how to apply patches to a VM instance."],["ReceiveTaskNotificationRequest","A request message to receive task notifications."],["ReceiveTaskNotificationResponse","The streaming rpc message that will notify the agent when it has a task it needs to perform on the instance."],["RegisterAgentRequest","The request message for registering the agent."],["RegisterAgentResponse","The response message after the agent registered."],["ReportInventoryRequest","The request message for having the agent report inventory."],["ReportInventoryResponse","The response message after the agent has reported inventory."],["ReportTaskCompleteRequest","A request message for signaling the completion of a task execution."],["ReportTaskCompleteResponse","The response message after the agent signaled the current task complete."],["ReportTaskProgressRequest","A request message for reporting the progress of current task."],["ReportTaskProgressResponse","The response message after the agent reported the current task progress."],["RetryStrategy","The strategy for retrying failed patches during the patch window."],["StartNextTaskRequest","A request message for signaling the start of a task execution."],["StartNextTaskResponse","A response message that contains the details of the task to work on."],["Task","A unit of work to be performed by the agent."],["WindowsUpdateSettings","Windows patching is performed using the Windows Update Agent."],["YumSettings","Yum patching will be performed by executing `yum update`. Additional options can be set to control how this is executed."],["ZypperSettings","Zypper patching is performed by running `zypper patch`. See also https://en.opensuse.org/SDB:Zypper_manual."]]});