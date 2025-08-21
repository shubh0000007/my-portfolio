import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FileText, 
  ExternalLink, 
  Download, 
  Award, 
  Calendar,
  Building,
  Eye,
  CheckCircle
} from 'lucide-react';

interface Certification {
  id: string;
  title: string;
  organization: string;
  issueDate: string;
  expiryDate?: string;
  credentialId?: string;
  type: 'pdf' | 'badge' | 'link';
  pdfUrl?: string;
  badgeUrl?: string;
  verificationUrl?: string;
  downloadUrl?: string;
  description?: string;
  skills: string[];
}

const Certifications: React.FC = () => {
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);
  const [showModal, setShowModal] = useState(false);

  const certifications: Certification[] = [
               {
        id: 'microsoft-powerbi',
        title: 'Microsoft Certified: Power BI Data Analyst Associate',
        organization: 'Microsoft',
        issueDate: '2025',
        credentialId: '23229FC6A0A224FA',
        type: 'pdf',
        pdfUrl: '/certifications/microsoft-powerbi-data-analyst.pdf',
        verificationUrl: 'https://learn.microsoft.com/api/credentials/share/en-in/shubhamjain-2466/23229FC6A0A224FA?sharingId=5177CC45D82358E3',
        downloadUrl: '/certifications/microsoft-powerbi-data-analyst.pdf',
        description: 'Certified in creating and managing Power BI workspaces, building reports and dashboards, and implementing data security.',
        skills: ['Power BI Pro', 'Advanced DAX', 'Data Modeling', 'Report Development', 'Dashboard Design', 'Business Intelligence']
      },
         {
       id: 'aws-ccp',
       title: 'AWS Certified Cloud Practitioner',
       organization: 'Amazon Web Services',
       issueDate: '2025',
       credentialId: '90d7e8b5-4b9e-4db4-abbe-ae1cd9344f73',
       type: 'badge',
       badgeUrl: '/certifications/aws-certified-cloud-practitioner.png',
       verificationUrl: 'https://www.credly.com/badges/90d7e8b5-4b9e-4db4-abbe-ae1cd9344f73/public_url',
       downloadUrl: '/certifications/aws-certified-cloud-practitioner.png',
       description: 'Foundational AWS cloud concepts, services, security, architecture, pricing, and support.',
               skills: ['AWS Cloud', 'Cloud Security', 'Cloud Architecture', 'AWS Services', 'DevOps', 'Infrastructure as Code']
     }
  ];

  const openPdfModal = (cert: Certification) => {
    setSelectedCert(cert);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedCert(null);
  };

  const getIconForType = (type: string) => {
    switch (type) {
      case 'pdf':
        return FileText;
      case 'badge':
        return Award;
      case 'link':
        return ExternalLink;
      default:
        return Award;
    }
  };

  const CertificationCard: React.FC<{ cert: Certification; index: number }> = ({ cert, index }) => {
    const IconComponent = getIconForType(cert.type);

    return (
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: index * 0.1 }}
        viewport={{ once: true, margin: "-100px 0px 0px 0px" }}
        className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100 group"
      >
        {/* Header with Icon */}
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-blue-600 rounded-xl text-white">
              <IconComponent className="w-8 h-8" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                {cert.title}
              </h3>
              <p className="text-blue-600 font-medium">{cert.organization}</p>
            </div>
          </div>
          <div className="text-right">
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Calendar className="w-4 h-4" />
              <span>{cert.issueDate}</span>
            </div>
            {cert.credentialId && (
              <div className="text-xs text-gray-500 mt-1">
                ID: {cert.credentialId}
              </div>
            )}
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          {cert.description && (
            <p className="text-gray-600 mb-4 leading-relaxed">
              {cert.description}
            </p>
          )}

          {/* Skills */}
          <div className="mb-6">
            <h4 className="text-sm font-semibold text-gray-700 mb-3">Skills & Technologies</h4>
            <div className="flex flex-wrap gap-2">
              {cert.skills.map((skill, skillIndex) => (
                <span
                  key={skillIndex}
                  className="px-3 py-1 bg-blue-50 text-blue-700 rounded-lg text-xs font-medium border border-blue-100"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-3">
            {cert.type === 'pdf' && cert.pdfUrl && (
              <button
                onClick={() => openPdfModal(cert)}
                className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors text-sm font-medium"
              >
                <Eye className="w-4 h-4" />
                View Certificate
              </button>
            )}
            
            {cert.type === 'badge' && cert.badgeUrl && (
              <button
                onClick={() => window.open(cert.badgeUrl, '_blank')}
                className="flex items-center gap-2 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors text-sm font-medium"
              >
                <Award className="w-4 h-4" />
                View Badge
              </button>
            )}

            {cert.verificationUrl && (
              <a
                href={cert.verificationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white rounded-lg transition-colors text-sm font-medium"
              >
                <CheckCircle className="w-4 h-4" />
                Verify
              </a>
            )}

            {cert.downloadUrl && (
              <a
                href={cert.downloadUrl}
                download
                className="flex items-center gap-2 px-4 py-2 border-2 border-gray-600 text-gray-600 hover:bg-gray-600 hover:text-white rounded-lg transition-colors text-sm font-medium"
              >
                <Download className="w-4 h-4" />
                Download
              </a>
            )}
          </div>
        </div>
      </motion.div>
    );
  };

  return (
    <section id="certifications" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Professional <span className="gradient-text">Certifications</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Industry-recognized certifications that validate my expertise in data analytics, cloud computing, and business intelligence.
          </p>
        </motion.div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {certifications.map((cert, index) => (
            <CertificationCard key={cert.id} cert={cert} index={index} />
          ))}
        </div>


      </div>

      {/* PDF Modal */}
      {showModal && selectedCert && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
            <div className="flex items-center justify-between p-6 border-b">
              <h3 className="text-xl font-bold text-gray-900">
                {selectedCert.title}
              </h3>
              <button
                onClick={closeModal}
                className="text-gray-500 hover:text-gray-700 text-2xl font-bold"
              >
                ×
              </button>
            </div>
            <div className="p-6">
              {selectedCert.pdfUrl ? (
                <iframe
                  src={selectedCert.pdfUrl}
                  className="w-full h-[70vh] border-0"
                  title={selectedCert.title}
                />
              ) : (
                <div className="text-center py-20 text-gray-500">
                  <FileText className="w-16 h-16 mx-auto mb-4 text-gray-300" />
                  <p>PDF certificate not available</p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Certifications;
