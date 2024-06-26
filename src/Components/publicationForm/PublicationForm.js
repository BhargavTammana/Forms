import React from 'react';
import { useForm } from 'react-hook-form';
const PublicationForm = () => {
  const { register, handleSubmit, formState: { errors }, getValues, setValue } = useForm();

  const onSubmit = (data) => {
    // Handle form submission, e.g., send data to server
    console.log(data);
  };

  const handleNext = () => {
    // Move to next step or page
    console.log('Next');
  };

  const handlePrev = () => {
    // Move to previous step or page
    console.log('Previous');
  };

  return (
    <div className="container mt-5 shadow-lg p-3 mb-5 bg-white rounded">
      <h2 className="form-heading mb-4">Publication Form</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="publication-form">
      <div className='row mb-3 '>
        <div className="col-md-4">
          <label htmlFor="publicationId" className="form-label">Publication ID:</label>
          {/* <div className='col-md-4-sm-4 d-flex justify-content-center'> */}
          <input type="text" {...register('publicationId', { required: true })} className={`form-control ${errors.publicationId ? 'is-invalid' : ''}`} id="publicationId"/>
          {errors.publicationId && <div className="invalid-feedback">Publication ID is required</div>}
          {/* </div> */}
        </div>
      </div>
        <div className="form-group">
          <div className="row mb-3">
            <div className="col-md-4">
              <label htmlFor="facultyName" className="form-label">Faculty Name:</label>
              <input type="text" {...register('facultyName', { required: true })} className={`form-control ${errors.facultyName ? 'is-invalid' : ''}`} id="facultyName" />
              {errors.facultyName && <div className="invalid-feedback">Faculty Name is required</div>}
            </div>
            <div className="col-md-4">
              <label htmlFor="facultyId" className="form-label">Faculty ID:</label>
              <input type="text" {...register('facultyId', { required: true })} className={`form-control ${errors.facultyId ? 'is-invalid' : ''}`} id="facultyId" />
              {errors.facultyId && <div className="invalid-feedback">Faculty ID is required</div>}
            </div>
            <div className="col-md-4">
                <label className="form-label">Designation:</label>
                <div className="form-check form-check-inline">
                  <input type="radio" {...register('designation', { required: true })} value="Assistant" className="form-check-input" id="assistant" />
                  <label htmlFor="assistant" className="form-check-label">Assistant</label>
                </div>
                <div className="form-check form-check-inline">
                  <input type="radio" {...register('designation', { required: true })} value="Associate" className="form-check-input" id="associate" />
                  <label htmlFor="associate" className="form-check-label">Associate</label>
                </div>
                <div className="form-check form-check-inline">
                  <input type="radio" {...register('designation', { required: true })} value="Professor" className="form-check-input" id="professor" />
                  <label htmlFor="professor" className="form-check-label">Professor</label>
                </div>
                {errors.designation && <div className="invalid-feedback">Designation is required</div>}
              </div>
          </div>
        </div>
        <div className="form-group">
          <div className="row mb-3">
            <div className="col-md-4">
              <label htmlFor="dept" className="form-label">Department:</label>
              <select {...register('dept', { required: true })} className={`form-control ${errors.dept ? 'is-invalid' : ''}`} id="dept">
                <option value="">Select Department</option>
                <option value="dept1">Department 1</option>
                <option value="dept2">Department 2</option>
                <option value="dept3">Department 3</option>
              </select>
              {errors.dept && <div className="invalid-feedback">Department is required</div>}
            </div>
            <div className="col-md-4">
              <label htmlFor="publicationType" className="form-label">Publication Type:</label>
              <input type="text" {...register('publicationType', { required: true })} className={`form-control ${errors.publicationType ? 'is-invalid' : ''}`} id="publicationType" />
              {errors.publicationType && <div className="invalid-feedback">Publication Type is required</div>}
            </div>
            <div className="col-md-4">
              <label htmlFor="publicationTitle" className="form-label">Publication Title:</label>
              <input type="text" {...register('publicationTitle', { required: true })} className={`form-control ${errors.publicationTitle ? 'is-invalid' : ''}`} id="publicationTitle" />
              {errors.publicationTitle && <div className="invalid-feedback">Publication Title is required</div>}
            </div>
          </div>
        </div>
        <div className="form-group">
          <div className="row mb-3">
            {/* Repeat similar structure for other fields */}
            <div className="col-md-4">
              <label htmlFor="authorId1" className="form-label">Author ID 1:</label>
              <input type="text" {...register('authorId1', { required: true })} className={`form-control ${errors.authorId1 ? 'is-invalid' : ''}`} id="authorId1" />
              {errors.authorId1 && <div className="invalid-feedback">Author ID 1 is required</div>}
            </div>
            <div className="col-md-4">
              <label htmlFor="authorId2" className="form-label">Author ID 2:</label>
              <input type="text" {...register('authorId2', { required: true })} className={`form-control ${errors.authorId2 ? 'is-invalid' : ''}`} id="authorId2" />
              {errors.authorId2 && <div className="invalid-feedback">Author ID 2 is required</div>}
            </div>
            <div className="col-md-4">
              <label htmlFor="authorId3" className="form-label">Author ID 3:</label>
              <input type="text" {...register('authorId3', { required: true })} className={`form-control ${errors.authorId3 ? 'is-invalid' : ''}`} id="authorId3" />
              {errors.authorId3 && <div className="invalid-feedback">Author ID 3 is required</div>}
            </div>
          </div>
        </div>
        <div className="form-group">
          <div className="row mb-3">
            {/* Repeat similar structure for other fields */}
            <div className="col-md-4">
              <label htmlFor="authorId1" className="form-label">Author ID 4:</label>
              <input type="text" {...register('authorId4', { required: true })} className={`form-control ${errors.authorId4 ? 'is-invalid' : ''}`} id="authorId4" />
              {errors.authorId4 && <div className="invalid-feedback">Author ID 4 is required</div>}
            </div>
            <div className="col-md-4">
              <label htmlFor="authorId5" className="form-label">Author ID 5:</label>
              <input type="text" {...register('authorId5', { required: true })} className={`form-control ${errors.authorId5 ? 'is-invalid' : ''}`} id="authorId5" />
              {errors.authorId5 && <div className="invalid-feedback">Author ID 5 is required</div>}
            </div>
            <div className="col-md-4">
              <label htmlFor="authorId6" className="form-label">Author ID 6:</label>
              <input type="text" {...register('authorId6', { required: true })} className={`form-control ${errors.authorId6 ? 'is-invalid' : ''}`} id="authorId6" />
              {errors.authorId6 && <div className="invalid-feedback">Author ID 6 is required</div>}
            </div>
          </div>
        </div>
        <div className="form-group">
          <div className="row mb-3">
            <div className="col-md-4">
              <label htmlFor="authorId7" className="form-label">Author ID 7:</label>
              <input type="text" {...register('authorId7', { required: true })} className={`form-control ${errors.authorId7 ? 'is-invalid' : ''}`} id="authorId7" />
              {errors.authorId7 && <div className="invalid-feedback">Author ID 7 is required</div>}
            </div>
            <div className="col-md-4">
              <label htmlFor="conferenceName" className="form-label">Conference Name:</label>
              <input type="text" {...register('conferenceName', { required: true })} className={`form-control ${errors.conferenceName ? 'is-invalid' : ''}`} id="conferenceName" />
              {errors.conferenceName && <div className="invalid-feedback">Conference Name is required</div>}
            </div>
            <div className="col-md-4">
              <label htmlFor="volumeNumber" className="form-label">Volume Number:</label>
              <input type="text" {...register('volumeNumber', { required: true })} className={`form-control ${errors.volumeNumber ? 'is-invalid' : ''}`} id="volumeNumber" />
              {errors.volumeNumber && <div className="invalid-feedback">Volume Number is required</div>}
            </div>
          </div>
        </div>
        <div className="form-group">
          <div className="row mb-3">
            <div className="col-md-4">
              <label htmlFor="pageNumber" className="form-label">Page Number:</label>
              <input type="text" {...register('pageNumber', { required: true })} className={`form-control ${errors.pageNumber ? 'is-invalid' : ''}`} id="pageNumber" />
              {errors.pageNumber && <div className="invalid-feedback">Page Number is required</div>}
            </div>
            <div className="col-md-4">
              <label htmlFor="issueNumber" className="form-label">Issue Number:</label>
              <input type="text" {...register('issueNumber', { required: true })} className={`form-control ${errors.issueNumber ? 'is-invalid' : ''}`} id="issueNumber" />
              {errors.issueNumber && <div className="invalid-feedback">Issue Number is required</div>}
            </div>
            <div className="col-md-4">
              <label htmlFor="levelOfCirculation" className="form-label">Level of Circulation:</label>
              <select {...register('levelOfCirculation', { required: true })} className={`form-control ${errors.levelOfCirculation ? 'is-invalid' : ''}`} id="levelOfCirculation">
                <option value="">Select Level</option>
                <option value="National">National</option>
                <option value="International">International</option>
              </select>
              {errors.levelOfCirculation && <div className="invalid-feedback">Level of Circulation is required</div>}
            </div>
          </div>
        </div>
        <div className="form-group">
          <div className="row mb-3">
            <div className="col-md-4">
              <label htmlFor="journalName" className="form-label">Journal Name:</label>
              <input type="text" {...register('journalName', { required: true })} className={`form-control ${errors.journalName ? 'is-invalid' : ''}`} id="journalName" />
              {errors.journalName && <div className="invalid-feedback">Journal Name is required</div>}
            </div>
            <div className="col-md-4">
              <label htmlFor="dateOfPublication" className="form-label">Date of Publication:</label>
              <input type="date" {...register('dateOfPublication', { required: true })} className={`form-control ${errors.dateOfPublication ? 'is-invalid' : ''}`} id="dateOfPublication" />
              {errors.dateOfPublication && <div className="invalid-feedback">Date of Publication is required</div>}
            </div>
            <div className="col-md-4">
              <label htmlFor="indexedIn" className="form-label">Indexed In:</label>
              <input type="text" {...register('indexedIn', { required: true })} className={`form-control ${errors.indexedIn ? 'is-invalid' : ''}`} id="indexedIn" />
              {errors.indexedIn && <div className="invalid-feedback">Indexed In is required</div>}
            </div>
          </div>
        </div>
        <div className="form-group">
          <div className="row mb-3">
            <div className="col-md-4">
              <label htmlFor="indexProof" className="form-label">Index Proof (URL):</label>
              <input type="url" {...register('indexProof', { required: true })} className={`form-control ${errors.indexProof ? 'is-invalid' : ''}`} id="indexProof" />
              {errors.indexProof && <div className="invalid-feedback">Index Proof (URL) is required</div>}
            </div>
            <div className="col-md-4">
              <label htmlFor="issnIsbnNumber" className="form-label">ISSN/ISBN Number:</label>
              <input type="text" {...register('issnIsbnNumber', { required: true })} className={`form-control ${errors.issnIsbnNumber ? 'is-invalid' : ''}`} id="issnIsbnNumber" />
              {errors.issnIsbnNumber && <div className="invalid-feedback">ISSN/ISBN Number is required</div>}
            </div>
            <div className="col-md-4">
              <label htmlFor="impactFactor" className="form-label">Impact Factor:</label>
              <input type="number" step="0.01" {...register('impactFactor', { required: true })} className={`form-control ${errors.impactFactor ? 'is-invalid' : ''}`} id="impactFactor" />
              {errors.impactFactor && <div className="invalid-feedback">Impact Factor is required</div>}
            </div>
          </div>
        </div>
        <div className="form-group">
          <div className="row mb-3">
            <div className="col-md-4">
              <label className="form-label">Scopus:</label>
              <div className="form-check form-check-inline">
                <input type="radio" id="scopusYes" value="Yes" {...register('scopus', { required: true })} className={`form-check-input ${errors.scopus ? 'is-invalid' : ''}`} />
                <label htmlFor="scopusYes" className="form-check-label">Yes</label>
              </div>
              <div className="form-check form-check-inline">
                <input type="radio" id="scopusNo" value="No" {...register('scopus', { required: true })} className={`form-check-input ${errors.scopus ? 'is-invalid' : ''}`} />
                <label htmlFor="scopusNo" className="form-check-label">No</label>
              </div>
              {errors.scopus && <div className="invalid-feedback">Please select an option for Scopus</div>}
            </div>
            <div className="col-md-4">
              <label className="form-label">Web of Science:</label>
              <div className="form-check form-check-inline">
                <input type="radio" id="webOfScienceYes" value="Yes" {...register('webOfScience', { required: true })} className={`form-check-input ${errors.webOfScience ? 'is-invalid' : ''}`} />
                <label htmlFor="webOfScienceYes" className="form-check-label">Yes</label>
              </div>
              <div className="form-check form-check-inline">
                <input type="radio" id="webOfScienceNo" value="No" {...register('webOfScience', { required: true })} className={`form-check-input ${errors.webOfScience ? 'is-invalid' : ''}`} />
                <label htmlFor="webOfScienceNo" className="form-check-label">No</label>
              </div>
              {errors.webOfScience && <div className="invalid-feedback">Please select an option for Web of Science</div>}
            </div>
            <div className="col-md-4">
              <label className="form-label">SCI:</label>
              <div className="form-check form-check-inline">
                <input type="radio" id="sciYes" value="Yes" {...register('sci', { required: true })} className={`form-check-input ${errors.sci ? 'is-invalid' : ''}`} />
                <label htmlFor="sciYes" className="form-check-label">Yes</label>
              </div>
              <div className="form-check form-check-inline">
                <input type="radio" id="sciNo" value="No" {...register('sci', { required: true })} className={`form-check-input ${errors.sci ? 'is-invalid' : ''}`} />
                <label htmlFor="sciNo" className="form-check-label">No</label>
              </div>
              {errors.sci && <div className="invalid-feedback">Please select an option for SCI</div>}
            </div>
          </div>
        </div>
        <div className="form-group">
          <div className="row mb-3">
            <div className="col-md-4">
              <label className="form-label">Google Scholar:</label>
              <div className="form-check form-check-inline">
                <input type="radio" id="googleScholarYes" value="Yes" {...register('googleScholar', { required: true })} className={`form-check-input ${errors.googleScholar ? 'is-invalid' : ''}`} />
                <label htmlFor="googleScholarYes" className="form-check-label ">Yes</label>
              </div>
              <div className="form-check form-check-inline">
                <input type="radio" id="googleScholarNo" value="No" {...register('googleScholar', { required: true })} className={`form-check-input ${errors.googleScholar ? 'is-invalid' : ''}`} />
                <label htmlFor="googleScholarNo" className="form-check-label ">No</label>
              </div>
              {errors.googleScholar && <div className="invalid-feedback">Please select an option for Google Scholar</div>}
            </div>
            <div className="col-md-4">
              <label className="form-label">UGC Rated:</label>
              <div className="form-check form-check-inline">
                <input type="radio" id="ugcRatedYes" value="Yes" {...register('ugcRated', { required: true })} className={`form-check-input ${errors.ugcRated ? 'is-invalid' : ''}`} />
                <label htmlFor="ugcRatedYes" className="form-check-label ">Yes</label>
              </div>
              <div className="form-check form-check-inline">
                <input type="radio" id="ugcRatedNo" value="No" {...register('ugcRated', { required: true })} className={`form-check-input ${errors.ugcRated ? 'is-invalid' : ''}`} />
                <label htmlFor="ugcRatedNo" className="form-check-label ">No</label>
              </div>
              {errors.ugcRated && <div className="invalid-feedback">Please select an option for UGC Rated</div>}
            </div>
            <div className="col-md-4">
              <label htmlFor="ugcProof" className="form-label">UGC Proof (File/URL):</label>
              <input type="text" {...register('ugcProof', { required: true })} className={`form-control ${errors.ugcProof ? 'is-invalid' : ''}`} id="ugcProof" />
              {errors.ugcProof && <div className="invalid-feedback">UGC Proof (File/URL) is required</div>}
            </div>
          </div>
        </div>
        <div className="form-group">
          <div className="row mb-3">
            <div className="col-md-4">
              <label htmlFor="hIndex" className="form-label">h-index:</label>
              <input type="number" {...register('hIndex')} className={`form-control ${errors.hIndex ? 'is-invalid' : ''}`} id="hIndex" />
              {errors.hIndex && <div className="invalid-feedback">h-index is required</div>}
            </div>
            <div className="col-md-4">
              <label htmlFor="citationCnt" className="form-label">Citation Count:</label>
              <input type="number" {...register('citationCnt')} className={`form-control ${errors.citationCnt ? 'is-invalid' : ''}`} id="citationCnt" />
              {errors.citationCnt && <div className="invalid-feedback">Citation Count is required</div>}
            </div>
            <div className="col-md-4">
              <label htmlFor="affiliatingInstitute" className="form-label">Affiliating Institute:</label>
              <input type="text" {...register('affiliatingInstitute')} className={`form-control ${errors.affiliatingInstitute ? 'is-invalid' : ''}`} id="affiliatingInstitute" />
              {errors.affiliatingInstitute && <div className="invalid-feedback">Affiliating Institute is required</div>}
            </div>
          </div>
        </div>
        <div className="form-group">
          <div className="row mb-3">
            <div className="col-md-4">
              <label htmlFor="publisherName" className="form-label">Publisher Name:</label>
              <input type="text" {...register('publisherName')} className={`form-control ${errors.publisherName ? 'is-invalid' : ''}`} id="publisherName" />
              {errors.publisherName && <div className="invalid-feedback">Publisher Name is required</div>}
            </div>
            <div className="col-md-4">
              <label htmlFor="paperLink" className="form-label">Paper Link (URL):</label>
              <input type="url" {...register('paperLink')} className={`form-control ${errors.paperLink ? 'is-invalid' : ''}`} id="paperLink" />
              {errors.paperLink && <div className="invalid-feedback">Please enter a valid URL for Paper Link</div>}
            </div>
            <div className="col-md-4">
              <label htmlFor="journalLink" className="form-label">Journal Link (URL):</label>
              <input type="url" {...register('journalLink')} className={`form-control ${errors.journalLink ? 'is-invalid' : ''}`} id="journalLink" />
              {errors.journalLink && <div className="invalid-feedback">Please enter a valid URL for Journal Link</div>}
            </div>
          </div>
        </div>
        <div className="form-group">
          <div className="row mb-3">
            <div className="col-md-4">
              <label htmlFor="proof" className="form-label">Proof (File):</label>
              <input type="file" {...register('proof')} className={`form-control ${errors.proof ? 'is-invalid' : ''}`} id="proof" />
              {errors.proof && <div className="invalid-feedback">Proof file is required</div>}
            </div>
            <div className="col-md-4">
              <label htmlFor="orcid_id" className="form-label">ORCID ID:</label>
              <input type="text" {...register('orcid_id')} className={`form-control ${errors.orcid_id ? 'is-invalid' : ''}`} id="orcid_id" />
              {errors.orcid_id && <div className="invalid-feedback">ORCID ID is required</div>}
            </div>
            <div className="col-md-4">
              <label htmlFor="scopus_id" className="form-label">Scopus ID:</label>
              <input type="text" {...register('scopus_id')} className={`form-control ${errors.scopus_id ? 'is-invalid' : ''}`} id="scopus_id" />
              {errors.scopus_id && <div className="invalid-feedback">Scopus ID is required</div>}
            </div>
          </div>
        </div>
        <div className="form-group">
          <div className="row mb-3">
            <div className="col-md-4">
              <label htmlFor="vidwan_id" className="form-label">Vidwan ID:</label>
              <input type="text" {...register('vidwan_id')} className={`form-control ${errors.vidwan_id ? 'is-invalid' : ''}`} id="vidwan_id" />
              {errors.vidwan_id && <div className="invalid-feedback">Vidwan ID is required</div>}
            </div>
            <div className="col-md-4">
              <label htmlFor="googleScholar_id" className="form-label">Google Scholar ID:</label>
              <input type="text" {...register('googleScholar_id')} className={`form-control ${errors.googleScholar_id ? 'is-invalid' : ''}`} id="googleScholar_id" />
              {errors.googleScholar_id && <div className="invalid-feedback">Google Scholar ID is required</div>}
            </div>
            <div className="col-md-4">
              <label htmlFor="technology" className="form-label">Technology:</label>
              <input type="text" {...register('technology')} className={`form-control ${errors.technology ? 'is-invalid' : ''}`} id="technology" />
              {errors.technology && <div className="invalid-feedback">Technology is required</div>}
            </div>
          </div>
        </div>
        <div className="form-group">
            <div className="row mb-3">
              <div className="col-md-4">
                <label htmlFor="domain" className="form-label">Domain:</label>
                <input type="text" {...register('domain')} className={`form-control ${errors.domain ? 'is-invalid' : ''}`} id="domain" />
                {errors.domain && <div className="invalid-feedback">Domain is required</div>}
              </div>
              <div className="col-md-4">
                <label htmlFor="branch" className="form-label">Branch:</label>
                <input type="text" {...register('branch')} className={`form-control ${errors.branch ? 'is-invalid' : ''}`} id="branch" />
                {errors.branch && <div className="invalid-feedback">Branch is required</div>}
              </div>
              <div className="col-md-4">
                <label className="form-label">Industry:</label>
                <div className="form-check form-check-inline">
                  <input type="radio" id="industryYes" value="Yes" {...register('industry')} className={`form-check-input ${errors.industry ? 'is-invalid' : ''}`} />
                  <label htmlFor="industryYes" className="form-check-label">Yes</label>
                </div>
                <div className="form-check form-check-inline">
                  <input type="radio" id="industryNo" value="No" {...register('industry')} className={`form-check-input ${errors.industry ? 'is-invalid' : ''}`} />
                  <label htmlFor="industryNo" className="form-check-label">No</label>
                </div>
                {errors.industry && <div className="invalid-feedback">Please select an option for Industry</div>}
              </div>
            </div>
          </div>
          <div className="form-group">
          <div className="row mb-3">
            <div className="col-md-4">
              <label className="form-label">Foreign Author:</label>
              <div className="form-check form-check-inline">
                <input type="radio" id="foreignAuthorYes" value="Yes" {...register('foreignAuthor')} className={`form-check-input ${errors.foreignAuthor ? 'is-invalid' : ''}`} />
                <label htmlFor="foreignAuthorYes" className="form-check-label">Yes</label>
              </div>
              <div className="form-check form-check-inline">
                <input type="radio" id="foreignAuthorNo" value="No" {...register('foreignAuthor')} className={`form-check-input ${errors.foreignAuthor ? 'is-invalid' : ''}`} />
                <label htmlFor="foreignAuthorNo" className="form-check-label">No</label>
              </div>
              {errors.foreignAuthor && <div className="invalid-feedback">Please select an option for Foreign Author</div>}
            </div>
            <div className="col-md-4">
              <label className="form-label">Publication Status:</label>
              <div className="form-check form-check-inline">
                <input type="radio" id="statusApproved" value="Approved" {...register('publicationStatus', { required: true })} className={`form-check-input ${errors.publicationStatus ? 'is-invalid' : ''}`} />
                <label htmlFor="statusApproved" className="form-check-label">Approved</label>
              </div>
              <div className="form-check form-check-inline">
                <input type="radio" id="statusSubmitted" value="Submitted" {...register('publicationStatus', { required: true })} className={`form-check-input ${errors.publicationStatus ? 'is-invalid' : ''}`} />
                <label htmlFor="statusSubmitted" className="form-check-label">Submitted</label>
              </div>
              <div className="form-check form-check-inline">
                <input type="radio" id="statusRejected" value="Rejected" {...register('publicationStatus', { required: true })} className={`form-check-input ${errors.publicationStatus ? 'is-invalid' : ''}`} />
                <label htmlFor="statusRejected" className="form-check-label">Rejected</label>
              </div>
              {errors.publicationStatus && <div className="invalid-feedback">Publication Status is required</div>}
            </div>
            <div className="col-md-4">
              <label className="form-label">Student Presence:</label>
              <div className="form-check form-check-inline">
                <input type="radio" id="presenceYes" value="Yes" {...register('studentPresence')} className={`form-check-input ${errors.studentPresence ? 'is-invalid' : ''}`} />
                <label htmlFor="presenceYes" className="form-check-label">Yes</label>
              </div>
              <div className="form-check form-check-inline">
                <input type="radio" id="presenceNo" value="No" {...register('studentPresence')} className={`form-check-input ${errors.studentPresence ? 'is-invalid' : ''}`} />
                <label htmlFor="presenceNo" className="form-check-label">No</label>
              </div>
              {errors.studentPresence && <div className="invalid-feedback">Please select an option for Student Presence</div>}
            </div>
          </div>
        </div>



        

        
        {/* Add more groups of fields here */}
        <div className="nav-buttons d-flex justify-content-between">
          <button type="button" onClick={handlePrev} className="btn btn-success">Prev</button>
          <button type="button" onClick={handleSubmit(handleNext)} className="btn btn-success">Next</button>
        </div>
      </form>
    </div>
  );
};

export default PublicationForm;
