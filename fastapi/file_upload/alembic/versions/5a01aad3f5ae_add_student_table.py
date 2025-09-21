"""add student table

Revision ID: 5a01aad3f5ae
Revises: a5dae153489c
Create Date: 2025-09-21 15:56:18.530718

"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision: str = '5a01aad3f5ae'
down_revision: Union[str, Sequence[str], None] = 'a5dae153489c'
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    """Upgrade schema."""
    op.create_table(
        'student',
        sa.Column('id', sa.Integer, primary_key=True, index=True),
        sa.Column('name', sa.String(50), index=True, nullable=False),
        sa.Column('email', sa.String(100), unique=True, index=True, nullable=False),
        sa.Column('age', sa.Integer, nullable=False),
        sa.Column('grade', sa.String(10), nullable=True),
    )


def downgrade() -> None:
    """Downgrade schema."""
    op.drop_table('student')
