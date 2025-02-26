<div class="modal fade" id="employeeModal" tabindex="-1" aria-labelledby="employeeModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content" >
            <div class="modal-header">
                <h5 class="modal-title" id="employeeModalLabel">Employee Details</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body" *ngIf="employee">
                <p><strong>ID:</strong> {{ employee.id }}</p>
                <p><strong>Name:</strong> {{ employee.name }}</p>
                <p><strong>Email:</strong> {{ employee.email }}</p>
                <p><strong>Mobile No:</strong> {{ employee.mobileNo }}</p>
                <p><strong>Date of Joining:</strong> {{ employee.dateOfJoining }}</p>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
        </div>
    </div>
</div>
