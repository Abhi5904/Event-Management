import React from 'react'

const webdevelopment = () => {
  return (
    <>
      {eventData===null || eventData.length === 0 ?(<div>No event availabel in this category. please select other category</div>): (
                <>
                    <div className="row">
                        {
                            displayedCards.map((event) => {
                                return <Card event={event} id={event._id} />
                            })
                        }
                    </div>
                    <div className='d-flex justify-content-between align-items-center mt-5'>
                        <button onClick={goToPreviousPage} disabled={currentPage === 1} className='BackButton'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16"> <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z" /> </svg>
                            <span>Back</span>
                        </button>
                        <span>Page {currentPage}/{totalPages}</span>
                        <button onClick={goToNextPage} disabled={currentPage === totalPages} className='nextButton'>
                            <span>Next</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16"> <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" /> </svg>
                        </button>
                    </div>
                </>) 
            }
    </>
  )
}

export default webdevelopment
