initSidebarItems({"enum":[["Architecture","Instruction set architectures supported by various package managers."],["NoteKind","Kind represents the kinds of notes supported."],["Severity","Note provider assigned severity/impact ranking."]],"mod":[["alias_context",""],["attestation_note",""],["cloud_repo_source_context",""],["cvs_sv3",""],["deployment_occurrence",""],["discovery_occurrence",""],["gerrit_source_context",""],["grafeas_client","Generated client implementations."],["note",""],["occurrence",""],["repo_id",""],["source_context",""],["version",""],["vulnerability_note",""],["vulnerability_occurrence",""],["windows_update",""]],"struct":[["AliasContext","An alias to a repo revision."],["Artifact","Artifact describes a build product."],["AttestationNote","Note kind that represents a logical attestation \"role\" or \"authority\". For example, an organization might have one `Authority` for \"QA\" and one for \"build\". This note is intended to act strictly as a grouping mechanism for the attached occurrences (Attestations). This grouping mechanism also provides a security boundary, since IAM ACLs gate the ability for a principle to attach an occurrence to a given note. It also provides a single point of lookup to find all attached attestation occurrences, even if they don't all live in the same project."],["AttestationOccurrence","Occurrence that represents a single \"attestation\". The authenticity of an attestation can be verified using the attached signature. If the verifier trusts the public key of the signer, then verifying the signature is sufficient to establish trust. In this circumstance, the authority to which this attestation is attached is primarily useful for lookup (how to find this attestation if you already know the authority and artifact to be verified) and intent (for which authority this attestation was intended to sign."],["BatchCreateNotesRequest","Request to create notes in batch."],["BatchCreateNotesResponse","Response for creating notes in batch."],["BatchCreateOccurrencesRequest","Request to create occurrences in batch."],["BatchCreateOccurrencesResponse","Response for creating occurrences in batch."],["BuildNote","Note holding the version of the provider's builder and the signature of the provenance message in the build details occurrence."],["BuildOccurrence","Details of a build occurrence."],["BuildProvenance","Provenance of a build. Contains all information needed to verify the full details about the build from source to completion."],["CloudRepoSourceContext","A CloudRepoSourceContext denotes a particular revision in a Google Cloud Source Repo."],["Command","Command describes a step performed as part of the build pipeline."],["CreateNoteRequest","Request to create a new note."],["CreateOccurrenceRequest","Request to create a new occurrence."],["CvsSv3","Common Vulnerability Scoring System version 3. For details, see https://www.first.org/cvss/specification-document"],["DeleteNoteRequest","Request to delete a note."],["DeleteOccurrenceRequest","Request to delete an occurrence."],["DeploymentNote","An artifact that can be deployed in some runtime."],["DeploymentOccurrence","The period during which some deployable was active in a runtime."],["DiscoveryNote","A note that indicates a type of analysis a provider would perform. This note exists in a provider's project. A `Discovery` occurrence is created in a consumer's project at the start of analysis."],["DiscoveryOccurrence","Provides information about the analysis status of a discovered resource."],["Distribution","This represents a particular channel of distribution for a given package. E.g., Debian's jessie-backports dpkg mirror."],["FileHashes","Container message for hashes of byte content of files, used in source messages to verify integrity of source input to the build."],["Fingerprint","A set of properties that uniquely identify a given Docker image."],["GerritSourceContext","A SourceContext referring to a Gerrit project."],["GetNoteRequest","Request to get a note."],["GetOccurrenceNoteRequest","Request to get the note to which the specified occurrence is attached."],["GetOccurrenceRequest","Request to get an occurrence."],["GitSourceContext","A GitSourceContext denotes a particular revision in a third party Git repository (e.g., GitHub)."],["Hash","Container message for hash values."],["ImageNote","Basis describes the base image portion (Note) of the DockerImage relationship. Linked occurrences are derived from this or an equivalent image via: FROM <Basis.resource_url> Or an equivalent reference, e.g., a tag of the resource_url."],["ImageOccurrence","Details of the derived image portion of the DockerImage relationship. This image would be produced from a Dockerfile with FROM <DockerImage.Basis in attached Note>."],["Layer","Layer holds metadata specific to a layer of a Docker image."],["ListNoteOccurrencesRequest","Request to list occurrences for a note."],["ListNoteOccurrencesResponse","Response for listing occurrences for a note."],["ListNotesRequest","Request to list notes."],["ListNotesResponse","Response for listing notes."],["ListOccurrencesRequest","Request to list occurrences."],["ListOccurrencesResponse","Response for listing occurrences."],["Location","An occurrence of a particular package installation found within a system's filesystem. E.g., glibc was found in `/var/lib/dpkg/status`."],["Note","A type of analysis that can be done for a resource."],["Occurrence","An instance of an analysis type that has been found on a resource."],["PackageNote","This represents a particular package that is distributed over various channels. E.g., glibc (aka libc6) is distributed by many, at various versions."],["PackageOccurrence","Details on how a particular software package was installed on a system."],["ProjectRepoId","Selects a repo using a Google Cloud Platform project ID (e.g., winged-cargo-31) and a repo name within that project."],["RelatedUrl","Metadata for any related URL information."],["RepoId","A unique identifier for a Cloud Repo."],["Signature","Verifiers (e.g. Kritis implementations) MUST verify signatures with respect to the trust anchors defined in policy (e.g. a Kritis policy). Typically this means that the verifier has been configured with a map from `public_key_id` to public key material (and any required parameters, e.g. signing algorithm)."],["Source","Source describes the location of the source used for the build."],["SourceContext","A SourceContext is a reference to a tree of files. A SourceContext together with a path point to a unique revision of a single file or directory."],["UpdateNoteRequest","Request to update a note."],["UpdateOccurrenceRequest","Request to update an occurrence."],["UpgradeDistribution","The Upgrade Distribution represents metadata about the Upgrade for each operating system (CPE). Some distributions have additional metadata around updates, classifying them into various categories and severities."],["UpgradeNote","An Upgrade Note represents a potential upgrade of a package to a given version. For each package version combination (i.e. bash 4.0, bash 4.1, bash 4.1.2), there will be an Upgrade Note. For Windows, windows_update field represents the information related to the update."],["UpgradeOccurrence","An Upgrade Occurrence represents that a specific resource_url could install a specific upgrade. This presence is supplied via local sources (i.e. it is present in the mirror and the running system has noticed its availability). For Windows, both distribution and windows_update contain information for the Windows update."],["Version","Version contains structured information about the version of a package."],["VulnerabilityNote","A security vulnerability that can be found in resources."],["VulnerabilityOccurrence","An occurrence of a severity vulnerability on a resource."],["WindowsUpdate","Windows Update represents the metadata about the update for the Windows operating system. The fields in this message come from the Windows Update API documented at https://docs.microsoft.com/en-us/windows/win32/api/wuapi/nn-wuapi-iupdate."]]});