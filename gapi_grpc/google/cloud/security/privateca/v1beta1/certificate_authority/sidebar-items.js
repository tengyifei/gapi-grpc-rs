initSidebarItems({"enum":[["SignHashAlgorithm","The algorithm of a Cloud KMS CryptoKeyVersion of a [CryptoKey][google.cloud.kms.v1.CryptoKey] with the [CryptoKeyPurpose][google.cloud.kms.v1.CryptoKey.CryptoKeyPurpose] value `ASYMMETRIC_SIGN`. These values correspond to the [CryptoKeyVersionAlgorithm][google.cloud.kms.v1.CryptoKeyVersion.CryptoKeyVersionAlgorithm] values. For RSA signing algorithms, the PSS algorithms should be preferred, use PKCS1 algorithms if required for compatibility. For further recommandations, see https://cloud.google.com/kms/docs/algorithms#algorithm_recommendations."],["State","The state of a [CertificateAuthority][google.cloud.security.privateca.v1beta1.CertificateAuthority], indicating if it can be used."],["Tier","The tier of a [CertificateAuthority][google.cloud.security.privateca.v1beta1.CertificateAuthority], indicating its supported functionality and/or billing SKU."],["Type","The type of a [CertificateAuthority][google.cloud.security.privateca.v1beta1.CertificateAuthority], indicating its issuing chain."]],"mod":[["certificate_authority_policy",""],["key_version_spec",""]],"struct":[["AccessUrls","URLs where a [CertificateAuthority][google.cloud.security.privateca.v1beta1.CertificateAuthority] will publish content."],["CertificateAuthorityPolicy","The issuing policy for a [CertificateAuthority][google.cloud.security.privateca.v1beta1.CertificateAuthority]. [Certificates][google.cloud.security.privateca.v1beta1.Certificate] will not be successfully issued from this [CertificateAuthority][google.cloud.security.privateca.v1beta1.CertificateAuthority] if they violate the policy."],["IssuingOptions","Options that affect all certificates issued by a [CertificateAuthority][google.cloud.security.privateca.v1beta1.CertificateAuthority]."],["KeyVersionSpec","A Cloud KMS key configuration that a [CertificateAuthority][google.cloud.security.privateca.v1beta1.CertificateAuthority] will use."]]});